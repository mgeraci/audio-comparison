export const AppState = {
  initial: "initial",
  comparing: "comparing",
  results: "results",
} as const;
export type AppState = (typeof AppState)[keyof typeof AppState];
export type Pairing = [string, string];
export type Score = {
  pairing: Pairing;
  winner: string;
};
export const PlaybackType = {
  a: "a",
  b: "b",
};
export type PlaybackType = (typeof PlaybackType)[keyof typeof PlaybackType];
