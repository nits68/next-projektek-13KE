export default class Seged {
  static joRendszam(rsz: string) {
    // Hossz ellenőrzése:
    if (rsz.length !== 7) return false;

    // Első három nagybetű ellenőrzése
    for (let i = 0; i < 3; i++) {
      // 0..2
      const akt: string = rsz[i];
      if (akt < "A" || akt > "Z") return false;
    }
    // Van kötőjel a 3-as indexen?
    if (rsz[3] !== "-") return false;

    // Utolsó három számjegy ellenőrése
    for (let i = 4; i < 7; i++) {
      // 4..6
      const akt: string = rsz[i];
      if (akt < "0" || akt > "9") return false;
    }

    // Ha ide ért a véhrehajtáa, akkor a rendszám megfelelő
    return true;
  }
}
