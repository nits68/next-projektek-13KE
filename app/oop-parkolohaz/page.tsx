import Megoldas from "@/app/oop-parkolohaz/Megoldas";

export default function MainPage() {
  const m: Megoldas = new Megoldas("./app/oop-parkolohaz/parkolohaz.txt");

  // 5. feladat:
  m.rendszámokGenerálása(10000);
  return (
    <div className="font-mono whitespace-pre">
      <p>2. feladat: Események száma: {m.eseményekSzáma}</p>
      <p>3. feladat: Belépések száma: {m.belépésekSzáma}</p>
      <p>6. feladat: Helyesen generált rendszámok aránya: { (m.jóRendszámokAránya * 100).toFixed(3)}%</p>
      <p>7. feladat: Statisztika</p>
      <p>{m.áthajtásStat2}</p>
    </div>
  );
}
