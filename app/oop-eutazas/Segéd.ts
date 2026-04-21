export default class Segéd {
  static napokszama(
    e1: number, // formális paraméterek (6db)
    h1: number,
    n1: number,
    e2: number,
    h2: number,
    n2: number,
  ): number {
    h1 = (h1 + 9) % 12; // Osztás maradéka: 5 % 2 = 1
    e1 = e1 - Math.floor(h1 / 10); // Egész osztás: Math.floor(5 / 2) = 2
    const d1: number =
      365 * e1 +
      Math.floor(e1 / 4) -
      Math.floor(e1 / 100) +
      Math.floor(e1 / 400) +
      Math.floor((h1 * 306 + 5) / 10) +
      n1 -
      1;
    h2 = (h2 + 9) % 12; // Osztás maradéka: 5 % 2 = 1
    e2 = e2 - Math.floor(h2 / 10); // Egész osztás: Math.floor(5 / 2) = 2
    const d2: number =
      365 * e2 +
      Math.floor(e2 / 4) -
      Math.floor(e2 / 100) +
      Math.floor(e2 / 400) +
      Math.floor((h2 * 306 + 5) / 10) +
      n2 -
      1;
    return d2 - d1;
  }
}
