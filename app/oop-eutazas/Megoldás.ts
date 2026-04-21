import fs from "fs";
import Felszállás from "@/app/oop-eutazas/Felszállás";
import FelszállásBérlet from "@/app/oop-eutazas/FelszállásBérlet";
import FelszállásJegy from "@/app/oop-eutazas/FelszállásJegy";

type MaxMegállóItems = {
  maxFelszálló: number;
  maxMegálló: number;
};

export default class Megoldás {
  #utasadatok: Felszállás[] = [];

  get felszállóFő(): number {
    return this.#utasadatok.length;
  }

  get érvénytelenFelszállásokDb(): number {
    let dbÉrvénytelen: number = 0;
    for (const e of this.#utasadatok) {
      if (e.ezÉrvénytelenFelszállás) dbÉrvénytelen++;
    }
    return dbÉrvénytelen;
  }

  get maxKereséseTömb(): MaxMegállóItems {
    // a max változó objektum típusú, két mezője van, lsd.: MaxMegállóItems típus
    const max: MaxMegállóItems = { maxMegálló: -1, maxFelszálló: -1 };
    // a stat tömb 30-as elemszámmal és 0 kezdőértékekkel lett inicializálva:
    const stat: number[] = new Array(30).fill(0);
    for (const e of this.#utasadatok) {
      stat[e.megállóSorszáma]++;
    }

    // Maximum keresése a Math.max() metódussal
    // Spread operátor (...)
    // const t:number = [1, 2, 6, 9];
    // ...t -> 1, 2, 6, 9
    max.maxFelszálló = Math.max(...stat);

    // A maximum érték melyik megálóhoz tartozik?
    // i az összetett adatszerkezet indexét veszi
    // for (const i in stat) {
    //     if (stat[i] == max.maxFelszálló) {
    //         max.maxMegálló = Number(i);
    //         break; // megtaláltuk az első maximumot, nem keresünk tovább
    //     }
    // }

    // az indexOf() függvény a keresett érték első előfordulásához tartozó indexet adja vissza
    max.maxMegálló = stat.indexOf(max.maxFelszálló);

    return max;
  }

  get IngyenesenUtazókFő(): number {
    let fő: number = 0;
    for (const e of this.#utasadatok) {
      if (e.ezIngyenesUtazás) fő++;
    }
    return fő;
  }

  get KedvezményesenUtazókFő(): number {
    // let fő: number = 0;
    // for (const e of this.#utasadatok) {
    //   if (e.ezKedvezményesUtazás) fő++;
    // }
    // return fő;
    return this.#utasadatok.filter((x) => x.ezKedvezményesUtazás).length;
  }

  constructor(forrás: string) {
    const adatsorok: string[] = fs.readFileSync(forrás, "utf-8").split("\n");
    for (const sor of adatsorok) {
      const aktSor = sor.trim(); // vezérlő karakterek eltávolítása (" ", \r)
      const típus: string = aktSor.split(" ")[3];
      if (típus === "JGY") {
        this.#utasadatok.push(new FelszállásJegy(aktSor));
      }

      if (["FEB", "TAB", "NYB", "NYP", "RVS", "GYK"].includes(típus)) {
        this.#utasadatok.push(new FelszállásBérlet(aktSor));
      }
    }
  }

  figyelmeztetéseketÍr(fileNeve: string) {
    const ki: string[] = [];
    for (const e of this.#utasadatok) {
      if (e instanceof FelszállásBérlet && e.ezLejárHáromNap) {
        ki.push(e.állománySora);
      }
    }
    // \r -> CR -> 13 ASCII kód
    // \n -> LF -> 10 ASCII kód
    fs.writeFileSync(fileNeve, ki.join("\r\n") + "\r\n")
  }
}
