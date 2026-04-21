import dayjs from "dayjs";
import Felszállás from "@/app/oop-eutazas/Felszállás";

export default class FelszállásBérlet extends Felszállás {
  #típus: string;
  #érvényes: Date;

  get ezÉrvénytelenFelszállás(): boolean {
    return this._idő >= this.#érvényes;
  }

  get ezIngyenesUtazás(): boolean {
    return !this.ezÉrvénytelenFelszállás && ["NYP","RVS","GYK"].includes(this.#típus);
  }

  get ezKedvezményesUtazás(): boolean {
    return !this.ezÉrvénytelenFelszállás && ["TAB","NYB"].includes(this.#típus);
  }

  get ezLejárHáromNap(): boolean {
    return !this.ezÉrvénytelenFelszállás && dayjs(this.#érvényes).diff(this._idő, "day") <= 3;
  }

  get állománySora(): string {
    return `${this._kártyaAzon} ${dayjs(this.#érvényes).format("YYYY-MM-DD")}`;
  }

  constructor(adatsor: string) {
    super(adatsor); // az ősosztály (Felszállás) konstruktorának hívása (kötelező)

    this.#típus = adatsor.split(" ")[3];
    // .add() tetszőleges értékkel és egységgel növelhető az aktulis dátuml
    // Mivel a bérlet a nap végéig érvényes, így a következő napot adtuk meg lejáratnak
    this.#érvényes = dayjs(adatsor.split(" ")[4]).add(1, "day").toDate();
  }
}
