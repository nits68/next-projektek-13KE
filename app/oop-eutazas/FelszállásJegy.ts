import Felszállás from "@/app/oop-eutazas/Felszállás";

// leszármazott (gyermek) osztály extends ősosztály szintaxis:
export default class FelszállásJegy extends Felszállás {
  #jegyekSzáma: number;

  // polimorfizmus
  get ezÉrvénytelenFelszállás(): boolean {
    return this.#jegyekSzáma < 1;
  }

  constructor(adatsor: string) {
    // A super() metódus az ős osztály konstruktorát hívja, JS/TS kötelező, C# opcionális
    super(adatsor);
    this.#jegyekSzáma = Number(adatsor.split(" ")[4]);
  }
}
