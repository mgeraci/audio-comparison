export const AppState =  {
    initial: "initial",
    comparing: "comparing",
    results: "results",
} as const;
export type AppState = typeof AppState[keyof typeof AppState];
export type Pairing = [string, string];
export type Score = {
    pairing: Pairing,
    winner: string,
};