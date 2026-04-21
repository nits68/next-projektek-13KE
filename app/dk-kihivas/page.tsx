export const mozgásformák: Map<string, number> = new Map<string, number>([
  ["U", 1],
  ["G", 1],
  ["F", 2],
  ["K", 10],
]);

export function elértTávolság(aktivitás: string): number {
  let távÖsszes: number = 0;
  for (const e of aktivitás) {
    // as number -> típuskényszerítés, mert a get() visszatérhet undefined értékkel, pl.: .get("B")
    // távÖsszes += mozgásformák.get(e) as number;

    // Ha a .get("B") undefined lesz, akkor nullát ad az összeghez
    távÖsszes += mozgásformák.get(e) || 0;
  }
  return távÖsszes;
}

export function jutalom10km(aktivitás: string): boolean {
  // Üres halmaz inicializálása?
  const mozgásformákHalmaz: Set<string> = new Set<string>();
  for (const e of aktivitás) {
    // Nem volt feladat: Mi van akkor, ha nem ismert mozgásforma található a string-ben?
    // Megoldás: Csak akkor adjuk a halmazhoz, ha szerepel a mozgásformák szótár kulcsai között:
    if (mozgásformák.keys().toArray().includes(e)) {
      // Hiába adunk azonos értékeket többször a halmazhoz, egy érték csak egyszer szerepelhet
      mozgásformákHalmaz.add(e);
    }
  }
  // Ha a halmaz elemszáma 4. akkor mind a 4 mozgásforma volt a héten (true)
  return mozgásformákHalmaz.size === 4;
}

export function jutalomSzöveg(aktivitás: string): string {
  if (jutalom10km(aktivitás)) return "Bravó! Jutalma még 10km.";
  else return "Nem jár jutalom."
}

export function kihívásÉrtékelése(gyűjtöttKm: number): string {
  if (gyűjtöttKm >= 40) return "Gratulálok, kihívás teljesítve!";
  else return "Legközelebb sikerül!"
}

export default function KihívásOldal() {
  const aktivitás: string = "FFFGGGUUUFFFGGKKK";
  const elértTáv: number = elértTávolság(aktivitás);
  const gyűjtöttKilométer: number = elértTáv + (jutalom10km(aktivitás) ? 10 : 0);
  return (
    <div className="font-mono whitespace-pre">
      <p>1. feladat</p>
      <p>Adja meg az aktivitást: {aktivitás}</p>
      <p>2. feladat</p>
      <p>Az elért távolság: {elértTáv} km.</p>
      <p>3. feladat:</p>
      <p>{jutalomSzöveg(aktivitás)}</p>
      <p>4. feladat:</p>
      <p>Eredménye: {gyűjtöttKilométer} km. {kihívásÉrtékelése(gyűjtöttKilométer)}</p>
    </div>
  );
}
