import Link from "next/link";

// Menüpontokat leíró töb szerkezete:
type LinkType = {
  id: number;
  href: string;
  label: string;
};

const links: LinkType[] = [
  { id: 1, href: "/hello-world", label: "Hello World!" },
  { id: 2, href: "/dk-fogyokura", label: "DigK-Fogyókúra" },
  { id: 3, href: "/dk-letra", label: "DigK-Letra" },
  { id: 4, href: "/dk-szallitas", label: "DigK-Szállítása" },
  { id: 5, href: "/dk-forgalomszamlalas", label: "DigK-Forgalomszámlálás" },
  { id: 6, href: "/dk-kihivas", label: "DigK-Kihívás" },
  { id: 7, href: "/oop-horvatorszag-folyoi", label: "OOP-Horvátország folyói" },
  { id: 8, href: "/oop-eutazas", label: "OOP-E-utazás" },
  { id: 9, href: "/oop-parkolohaz", label: "OOP-Parkolóház" },
  
];

export default function MainPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className="flex w-100 flex-col items-center rounded-xl bg-white p-5 shadow-xl">
        <h1 className="text-2xl font-semibold">13.KE Projektek</h1>
        <ul className="mt-5 list-disc">
          {links.map((e) => (
            <Link className="hover:text-blue-500 hover:underline" href={e.href} key={e.id}>
              <li>{e.label}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
