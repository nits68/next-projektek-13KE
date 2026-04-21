import Solution from "@/app/oop-horvatorszag-folyoi/Solution";

export default function HRriversPage() {
  const s: Solution = new Solution("./app/oop-horvatorszag-folyoi/HR_rivers.txt");

  // 9. feladat:
  s.writeFile("./app/oop-horvatorszag-folyoi/HR_rivers2.txt");
  return (
    <div className="font-mono whitespace-pre">
      <p>5. feladat: Tengerbe ömlő (torkolló) folyók száma: {s.drainsIntoSea}</p>
      <p>
        6. feladat: Az {'"a"'} betűre végződő folyók átlagos hossza: {s.averageLength.toFixed(2)} Km
      </p>
      <p>7. feladat: A leghosszabb (Horvátországban) folyó adatai:</p>
      <p>{s.maxLengthRiverInHR.riverData}</p>

      <p>8. feladat: Statisztika:</p>
      <p>{s.drainsStat}</p>
    </div>
  );
}
