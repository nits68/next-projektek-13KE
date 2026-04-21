export default class Athajtas {
  #idő: Date;
  #kapu: string;
  #rendszám: string;

  get ezBelépés(): boolean {
    return this.#kapu === "B";
  }

  get áthaladásÓra(): number {
    return this.#idő.getHours();
  }

  constructor(adatsor: string) {
    const m: string[] = adatsor.split(" ");
    this.#idő = new Date(0, 0, 0, Number(m[0]), Number(m[1]), Number(m[2]));
    this.#kapu = m[3];
    this.#rendszám = m[4];
  }
}
