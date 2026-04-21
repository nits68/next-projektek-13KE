import fs from "fs";
import Athajtas from "@/app/oop-parkolohaz/Athajtas";
import Seged from "@/app/oop-parkolohaz/Seged";

export default class Megoldas {
  #áthajtások: Athajtas[] = [];
  #generáltRendszámok: string[] = [];

  get eseményekSzáma(): number {
    return this.#áthajtások.length;
  }

  get belépésekSzáma(): number {
    let belépDb: number = 0;
    for (const e of this.#áthajtások) {
      if (e.ezBelépés) belépDb++;
    }
    return belépDb;
  }

  get generáltRenszám(): string {
    let rsz = "";
    const bank: string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    while (rsz.length < 3) {
      rsz += bank[Math.floor(Math.random() * 46)];
    }
    rsz += "-";
    while (rsz.length < 7) {
      rsz += bank[Math.floor(Math.random() * 46)];
    }
    return rsz;
  }

  get jóRendszámokAránya(): number {
    let jóDb: number = 0;
    for (const e of this.#generáltRendszámok) if (Seged.joRendszam(e)) jóDb++;
    return jóDb / this.#generáltRendszámok.length;
  }

  get áthajtásStat(): string {
    let vissza = "";
    // A szótár bejárása
    let db: number = 0;
    for (const [k, v] of this.#áthajtásStat) {
      vissza += `${k}h-${v}db `;
      db++;
      if (db % 8 == 0) vissza += "\n";
    }
    return vissza;
  }

  // Ha vaklamelyek órában nem volt behajtás, akkor az nem szerepel a szótárban
  // de azt is ki kell írni 0db-vel, ez a megoldása
  get áthajtásStat2(): string {
    let vissza = "";
    // A szótár bejárása
    let db: number = 0;
    for (let óra = 0; óra <= 23; óra++) {
      // "óra" lehetséges kulcsok
      const aktBehajtásDb: number | undefined = this.#áthajtásStat.get(óra);
      vissza += `${óra}h-${aktBehajtásDb ? aktBehajtásDb : 0}db `;
      db++;
      if (db % 8 == 0) vissza += "\n";
    }
    return vissza;
  }

  get #áthajtásStat(): Map<number, number> {
    const stat: Map<number, number> = new Map<number, number>();
    for (const áthajtás of this.#áthajtások) {
      if (áthajtás.ezBelépés) {
        const régiÉrték: number | undefined = stat.get(áthajtás.áthaladásÓra);
        stat.set(áthajtás.áthaladásÓra, régiÉrték ? régiÉrték + 1 : 1);
      }
    }
    return stat;
  }

  constructor(forrás: string) {
    const sorok: string[] = fs
      .readFileSync(forrás, "utf-8")
      .split("\n")
      .map((sor) => sor.trim());
    // sorok.at(-1) -> tömb utolsó eleme == sorok[sorok.length - 1]
    while (sorok.at(-1)?.length === 0) sorok.pop(); // üres adatsor(ok) törlése a tömbből

    for (const sor of sorok) {
      this.#áthajtások.push(new Athajtas(sor));
    }
  }

  rendszámokGenerálása(db: number) {
    this.#generáltRendszámok = [];
    while (this.#generáltRendszámok.length < db) {
      this.#generáltRendszámok.push(this.generáltRenszám);
    }
  }
}
