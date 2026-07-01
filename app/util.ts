// https://dev.to/tanvir_azad/fisher-yates-shuffle-the-right-way-to-randomize-an-array-4d2p
export function shuffle(array: Any) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index j such that 0 ≤ j ≤ i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}