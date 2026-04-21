// Menüpontokat leíró töb szerkezete:
type LinkType = {
  id: number;
  href: string;
  label: string;
}

const links: LinkType[] = [
  {id: 1, href: "/dk-fogyokura", label: "DigK-Fogyókúra"},
  {id: 2, href: "/dk-letra", label: "DigK-Letra"}
];

export default function MainPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className="flex-col flex w-100 items-center bg-white shadow-xl rounded-xl p-5">
        <h1 className="text-2xl font-semibold">13.KE Projektek</h1>
      </div>
    </div>
  );
}
