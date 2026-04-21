// klasszikus növekményes (for) ciklussal
export function célElérve4(cél: number, mérések: number[]): number {
  for (let i = 0; i < mérések.length; i++) {
    if (mérések[i] <= cél) return i + 1;
  }
  return 0; // ha a célt nem érte el Mari néni
}

// for-in ciklussal
export function célElérve(cél: number, mérések: number[]): number {
  for (const i in mérések) {
    const index: number = Number(i);
    const mértÉrték: number = mérések[index];
    if (mértÉrték <= cél) return index + 1;
  }
  return 0; // ha a célt nem érte el Mari néni
}

// for-of ciklussal:
export function célElérve2(cél: number, mérések: number[]): number {
  for (const [i, e] of mérések.entries()) {
    if (e <= cél) return i + 1;
  }
  return 0; // ha a célt nem érte el Mari néni
}

// A tömb forEach metódusával: Nem lehet kilépni a forEach ciklusból return, vagy break utasítással!
// Így a megoldás hibás!!!
export function célElérve3(cél: number, mérések: number[]): number {
  mérések.forEach((e, i) => {
    if (e <= cél) return (i + 1);
  })
  return 0; // ha a célt nem érte el Mari néni
}

export function célElérveSzöveg(cél: number, mérések: number[]): string {
  const keresettHét: number = célElérve(cél, mérések);
  if (keresettHét === 0) return "Sajnos Mari néni nem érte el a célját.";
  else return `Mari néni a(z) ${keresettHét} héten érte el a célt.`;
}

export function ejnyeBejnyeHetekSzáma(mérések: number[]): number {
  let hetekSzáma: number = 0;
  for (let i = 0; i < mérések.length - 1; i++) {
    if (mérések[i+1] > mérések[i]) hetekSzáma++;
  }
  return hetekSzáma;
}

export default function DKFogyokuraPage() {
  const célTömeg: number = 93.5;
  const mérések: number[] = [95.5, 93.3, 94.4, 93.3, 93.8, 92.9];
  return (
    // font-mono -> Monospace betűtípus (azonos szélesek a karakterek)
    // whitespace-pre -> vezérlő karakterek megtartása (\t, \n)
    <div className="font-mono whitespace-pre">
      <p>{`Hetek száma=${mérések.length}`}</p>
      <p>Elérni kívánt testömeg (kg)={célTömeg}</p>
      {/* Ciklus készítése JSX kódban: */}
      {/* e -> felveszi a tömb értékeit */}
      {/* i -> felveszi a tömb indexeit */}
      {/* a map metódus "iterál" */}
      {/* key jellemző kötelező, szerepe az azonosítás */}
      {mérések.map((e, i) => (
        <p key={i}>
          {i + 1}. héten={e}
        </p>
      ))}
      <p>{célElérveSzöveg(célTömeg, mérések)}</p>
      <p>A tömege {ejnyeBejnyeHetekSzáma(mérések)} esetben nőtt egyik hétről a másikra.</p>
    </div>
  );
}
