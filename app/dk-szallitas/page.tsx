export function összesTömeg(tárgyak: number[]): number {
  // Klasszikus összegzés tétel
  let összeg: number = 0;
  for (const e of tárgyak) {
    összeg += e;
  }
  return összeg;
}

export function dobozok(tárgyak: number[]): number[] {
  let aktDobozIndexe: number = 0;
  const d: number[] = [0] // dobozokban lévő össztömegek
  for (const e of tárgyak) {
    // Az aktuális tárgy (e) belefér-e még a dobozba?
    if (d[aktDobozIndexe] + e <= 20) {
      // Ha igen, akkor tegyük bele:
      d[aktDobozIndexe] += e;
    } else {
      // Nem fér már bele
      aktDobozIndexe++;
      d.push(e); // az új dobozba tesszük bele
    }
  }
  return d;
}

export default function SzállításPage() {
  const tárgyak: number[] = [16, 8, 9, 4, 3, 2, 4, 7, 7, 12, 3, 5, 4, 3, 2];
  const boxok: number[] = dobozok(tárgyak);
  return (
    <div className="font-mono whitespace-pre">
      <p>2. feladat</p>
      <p>A tárgyak tömegének összege: {összesTömeg(tárgyak)} kg</p>
      <p>3. feladat</p>
      <p>A dobozok tartalmának tömege: {dobozok(tárgyak).join(" ")}</p>
      <p>A szükséges dobozok száma: {boxok.length}</p>
    </div>
  );
}
