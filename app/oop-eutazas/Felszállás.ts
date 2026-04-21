import dayjs from "dayjs";

export default abstract class Felszállás {
  // "_" karakter jelzi, hogy a mező protected
  protected _megállóSorszáma: number;
  protected _idő: Date;
  protected _kártyaAzon: string;

  get megállóSorszáma(): number {
    return this._megállóSorszáma;
  }

  get ezÉrvénytelenFelszállás(): boolean {
    return false;
  }

  get ezIngyenesUtazás(): boolean {
    return false;
  }

  get ezKedvezményesUtazás(): boolean {
    return false;
  }

  get ezLejárHáromNap(): boolean {
    return false;
  }

  constructor(adatsor: string) {
    const [m, idő, k] = adatsor.split(" ");
    this._megállóSorszáma = Number(m);
    // this._idő = new Date(idő); // szemantikai hiba, mert a formátumot nem tudja értlemzni
    // const év: number = Number(idő.slice(0, 4));
    // const hó: number = Number(idő.slice(4, 6));
    // const nap: number = Number(idő.slice(6, 8));
    // const óra: number = Number(idő.slice(9, 11));
    // const perc: number = Number(idő.slice(11, 13));
    // this._idő = new Date(év, hó - 1, nap, óra, perc, 0, 0);

    // 20190326-0701
    this._idő = dayjs(idő, "YYYYMMDD-HHmm").toDate();

    this._kártyaAzon = k;
  }
}
