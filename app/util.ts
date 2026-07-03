import { Pairing } from "./types";

/**
 * Shuffles the elements of an array using the Fisher–Yates algorithm.
 *
 * @param array - The array to shuffle.
 * @returns A new array containing the shuffled elements.
 */
export function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

/**
 * Gets each pairing of the elements in the list.
 * @param array - The elements to pair off.
 * @returns An array of Pairing types.
 */
export function getPairs(arr: string[]): Pairing[] {
  const pairs: Pairing[] = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      pairs.push(shuffle([arr[i], arr[j]]) as Pairing);
    }
  }

  return pairs;
}
