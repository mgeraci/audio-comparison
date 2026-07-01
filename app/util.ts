import { Pairing } from "./types";

// https://dev.to/tanvir_azad/fisher-yates-shuffle-the-right-way-to-randomize-an-array-4d2p
export function shuffle(array: any) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index j such that 0 ≤ j ≤ i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 1 - a
// 26 - z
// 27 - aa
// etc.
export function getIdentifierForFile(file: string, files: string[]): string {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const index = files.findIndex((f) => f === file);
  const repeatCount = Math.floor(index / letters.length) + 1;
  const letterIndex = index % letters.length;

  const result = Array.from({ length: repeatCount }).reduce<string>((acc, _, i) => {
    return acc + letters[letterIndex];
  }, "");

  return result;
};

export function getPairs(arr: string[]): Pairing[] {
  const pairs: Pairing[] = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      pairs.push([arr[i], arr[j]]);
    }
  }

  return pairs;
}