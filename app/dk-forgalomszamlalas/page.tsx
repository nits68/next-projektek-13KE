export const mérések: number[] = [36, 48, 39, -1, 30, 43, -1, 76, 67, 82, 73, 75, 64, 73, 69, 63];

export function megszámoltKerékpárosok(m: number[]): number {
  let összes: number = 0;
  for (const e of m) {
    if (e != -1) {
      összes += e;
    }
  }
  return összes;
}

export function statisztika(m: number[]): Map<number, number> {
  const stat: Map<number, number> = new Map<number, number>([
    [6, 0],
    [7, 0],
    [8, 0],
    [9, 0],
  ]);
  for (let i = 0; i < mérések.length; i++) {
    const óra = Math.floor(i / 4) + 6;
    const aktuálisÉrték = stat.get(óra) as number;
    if (m[i] != -1) {
      stat.set(óra, aktuálisÉrték + m[i]);
    }
  }
  return stat;
}

export function statSzöveg(stat: Map<number, number>): string {
  let vissza: string = "";
  for (const [kulcs, érték] of stat) {
    vissza += `${kulcs} órától ${érték} kerékpáros.\n`;
  }
  return vissza;
}

export function maxKerékpárosFőIndex(m: number[]): number {
  let maxi: number = 0; // Legelső érték kijelölése maximumnak (az indexét tároljuk csak, értékét nem)
  for (let i = 1; i < m.length; i++) {
    if (m[i] > m[maxi]) maxi = i;
  }
  return maxi;
}

export function maxKerékpárosFőIndex2(m: number[]): number {
  // Legnagyobb érték meghatározása:
  const maxÉrték: number = Math.max(...m); // ... spread operátor, a tömböt "kilapítja", kinyeri az értékeket
  // Legnogyobb érték indexe: (ha nincs találat, akkor az indexOf() fg. -1-el tér vissza)
  return m.indexOf(maxÉrték);
}

export function indexToÓraPerc(index: number): string {
  const időPercekben: number = 375 + index * 15;
  const óra: number = Math.floor(időPercekben / 60);
  const perc: number = időPercekben % 60;
  return `${óra}:${perc}`;
}

export default function ForgalomszámlálásPage() {
  const stat: Map<number, number> = statisztika(mérések);
  const maxi: number = maxKerékpárosFőIndex2(mérések);
  return (
    <div className="font-mono whitespace-pre">
      <p>2. feladat</p>
      <p>Összesen {megszámoltKerékpárosok(mérések)} kerékpárost számoltak.</p>
      <p>3. feladat</p>
      <p>Óránkénti mérések:</p>
      <p>{statSzöveg(stat)}</p>
      <p>4. feladat</p>
      <p>
        Az áthaladók maximáli száma: {mérések[maxi]}; a rögzítés időpontja: {indexToÓraPerc(maxi)}.
      </p>
    </div>
  );
}
