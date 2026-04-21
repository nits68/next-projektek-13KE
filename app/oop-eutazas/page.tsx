import Megoldás from "@/app/oop-eutazas/Megoldás";

export default function MainPage() {
  const m: Megoldás = new Megoldás("./app/oop-eutazas/utasadat.txt");
  m.figyelmeztetéseketÍr("./app/oop-eutazas/figyelmeztetes.txt")
  return (
    <div className="font-mono whitespace-pre">
      <div>
        <p>2. feladat</p>
        <p>A buszra {m.felszállóFő} utas akart felszállni.</p>
        <p>3. feladat</p>
        <p>A buszra {m.érvénytelenFelszállásokDb} utas nem szálhatott fel.</p>
        <p>4. feladat</p>
        <p>A legtöbb utas ({m.maxKereséseTömb.maxFelszálló} fő) a {m.maxKereséseTömb.maxMegálló}. megállóban próbált felszállni.</p>
        <p>5. feladat</p>
        <p>Ingyenesen utazók száma: {m.IngyenesenUtazókFő} fő</p>
        <p>Kedvezményesen utazók száma: {m.KedvezményesenUtazókFő} fő</p>
      </div>
    </div>
  );
}
