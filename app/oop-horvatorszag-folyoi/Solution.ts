import fs from "fs";
import River from "@/app/oop-horvatorszag-folyoi/River";

export default class Solution {
  #rivers: River[] = [];

  get drainsIntoSea(): number {
    let numberOfRivers: number = 0;
    for (const river of this.#rivers) {
      if (river.isDrainsToSea) {
        numberOfRivers++;
      }
    }
    return numberOfRivers;
  }

  get #numberOfRiversWhereNameEndsWithA(): number {
    let numberOfRivers: number = 0;
    for (const river of this.#rivers) {
      if (river.isEndsWithA) numberOfRivers++;
    }
    return numberOfRivers;
  }

  get #sumLengthOfRiversWhereNameEndsWithA(): number {
    let sumLengthOfRivers: number = 0;
    for (const river of this.#rivers) {
      if (river.isEndsWithA) sumLengthOfRivers += river.totalLength;
    }
    return sumLengthOfRivers;
  }

  get averageLength(): number {
    return this.#sumLengthOfRiversWhereNameEndsWithA / this.#numberOfRiversWhereNameEndsWithA;
  }

  get maxLengthRiverInHR(): River {
    let maxRiver: River = this.#rivers[0];
    // slice(1) -> A kinevezett (this.#rivers[0]) leghosszabb folyót önmagához ne hasonlítsuk
    for (const river of this.#rivers.slice(1)) {
      if (river.lengthInHR > maxRiver.lengthInHR) {
        maxRiver = river;
      }
    }
    return maxRiver;
  }

  get #drainsStat(): Map<string, number> {
    const stat: Map<string, number> = new Map<string, number>();
    for (const river of this.#rivers) {
      if (stat.has(river.drainsInto)) {
        // A kulcs már a szótárban van?
        const régÉrték: number = stat.get(river.drainsInto) as number;
        stat.set(river.drainsInto, régÉrték + 1); // C# stat[river.drainsInto]++
      } else {
        // Ha még nincs a szótárban a kulcs
        stat.set(river.drainsInto, 1); // 1-es kezdőértékkel a folyó/tenger a szótárba kerül
      }
    }
    return stat;
  }

  get #drainsStat2(): Map<string, number> {
    const stat: Map<string, number> = new Map<string, number>();
    for (const river of this.#rivers) {
      const régiÉrték: number | undefined = stat.get(river.drainsInto);
      stat.set(river.drainsInto, régiÉrték ? régiÉrték + 1 : 1);
    }
    return stat;
  }

  get drainsStat(): string {
    let vissza = "";
    // A szótár bejárása
    for (const [k, v] of this.#drainsStat2) {
      if (v > 3) vissza += `\t${k} - ${v} db\n`;
    }
    return vissza;
  }

  get fileContent(): string {
    // új állomány fejlécsora:
    let content = "name;length_in_hr;located_in_HR;drains_into";
    for (const river of this.#rivers) {
      const percent: number = Math.round((river.lengthInHR / river.totalLength) * 100);
      content += `${river.name};${river.lengthInHR};${percent}%;${river.drainsInto}\n`;
    }
    return content;
  }

  constructor(sourceFile: string) {
    // readFileSync(sourceFile, "utf-8") -> Szöveges állományt beolvas, egy string típusú adattal tér vissza
    // split("\n") -> állomány adatait adatsorokra tördeli
    // slice(1) -> első sor elhagyása, mert az nem adatsor (hanem fejlécsor)
    const lines: string[] = fs.readFileSync(sourceFile, "utf-8").split("\n").slice(1);
    for (const line of lines) {
      const actLine: string = line.trim(); // trim() -> whitespace (pl.: "\r") karakterek eltávolítása
      // new -> példányosítás operátora
      // River() -> River osztály konstruktorát hívja
      // new River(actLine) -> létrejön egy új osztálypéldány, objektum
      // actLine.length > 0 -> csak az adatokat tartalmazó adatsor feldolgozása
      if (actLine.length > 0) this.#rivers.push(new River(actLine));
    }
  }

  writeFile(source: string): void {
    fs.writeFileSync(source, this.fileContent, "utf-8");
  }
}
