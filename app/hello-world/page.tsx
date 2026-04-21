  // Egyszerű változók használata (egy érték tárolására használjuk őket)
  const szöveg: string = "Körte";
  console.log(szöveg);
  let szám: number = 3.14;
  const logikai: boolean = true; // false
  console.log(logikai);

  // Értékadás:
  szám = 12;
  console.log(szám);

  // Egyszerű aritmetikai operátorok: +, -, *, /
  // Maradékos osztás: %
  // Egész osztás: Math.floor(5/2);

  // Relációs operátorok: <, >, <=, <==, >=, >==, !=, !==, ==, ===

  // Vezérlési szerkezetek:
  // - szekvencia
  // - szelekció (eldöntés)
  // - iteráció (ismétlés)

  // JSX kóddal visszatérő függvénynek csak egy gyökéreleme lehet
  // A gyökér elem gyakran React fragment: <> </>
  // JSX kódban nincs class attribútum,
  // helyette a className attribútumot kell használni
  // a return után akkor kell zárójel "()", ha a JSX kód több soros
  // JSX kódban kapcsos zárójelek közé JavaScrip kifejezések kerülhetnek
  // A kapcsos zárójelek közé JavaScript utasítások (if, for, stb.) nem kerülhetnek

export default function Home() {
  return <h1 className="text-3xl bg-green-400 text-red-700">Hello World 123</h1>;
}
