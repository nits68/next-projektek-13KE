export function játékosMezői(d: number[]): string {
  let vissza: string = "";
  let aktMező: number = 0;
  for (const dobás of d) {
    aktMező += dobás;
    if (aktMező % 10 == 0) aktMező -= 3; // létra mezőre lépett
    vissza += `${aktMező} `;
  }
  return vissza;
}

export function játékosMezői2(d: number[]): string {
  const mezők: number[] = [];
  let aktMező: number = 0;
  for (const dobás of d) {
    aktMező += dobás;
    if (aktMező % 10 == 0) aktMező -= 3;
    mezők.push(aktMező);
  }
  return mezők.join(" ");
}

export function visszalépésekSzáma(d: number[]): number {
  let db: number = 0;
  let aktMező: number = 0;
  for (const dobás of d) {
    aktMező += dobás;
    if (aktMező % 10 == 0) {
      aktMező -= 3; // aktMező = aktMező - 3
      db++; // db = db + 1 vagy db += 1
    }
  }
  return db;
}

export function játékEredménye(d: number[]): string {
  let aktMező: number = 0;
  for (const dobás of d) {
    aktMező += dobás;
    if (aktMező % 10 == 0) aktMező -= 3; // aktMező = aktMező - 3
  }
  return aktMező >= 45 ? "befejezte" : "abbahagyta"
}

export default function LétraPage() {
  const dobások: number[] = [3, 1, 1, 2, 1, 5, 5, 4, 4, 4, 1, 2, 3, 6, 4, 6, 1, 4];
  return (
    <div className="font-mono whitespace-pre">
      <p>2. feladat</p>
      <p>{játékosMezői(dobások)}</p>
      <p>3. feladat</p>
      <p>A játék során {visszalépésekSzáma(dobások)} alkalommal lépet létrára.</p>
      <p>4. feladat</p>
      <p>A játékot {játékEredménye(dobások)}.</p>
    </div>
  );
}
