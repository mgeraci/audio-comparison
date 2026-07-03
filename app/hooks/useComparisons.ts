import { useState } from "react";
import { AppState, Pairing, Score } from "../types";
import { shuffle, getPairs } from "../util";

const FILES = ["cockrum.wav", "crescent.wav", "original.wav", "goldtone.wav"];

const useComparison = () => {
  const [appState, setAppState] = useState<AppState>(AppState.initial);
  const [pairings, setPairings] = useState<Pairing[]>([]);
  const [scores, setScores] = useState<Score[]>([]);
  const [index, setIndex] = useState(0);

  const runInitialSetup = () => {
    const shuffledFiles = shuffle([...FILES]);
    setPairings(shuffle(getPairs(shuffledFiles)));
    setScores([]);
    setIndex(0);
    setAppState(AppState.comparing);
  };

  const endRound = (pairing: Pairing, winner: string) => {
    setScores([...scores, { pairing, winner }]);

    if (index + 1 >= pairings.length) {
      setAppState(AppState.results);
    } else {
      setIndex(index + 1);
    }
  };

  const startOver = () => {
    setAppState(AppState.initial);
  };

  const currentPairing = pairings[index];

  return {
    appState,
    pairings,
    currentPairing,
    scores,
    index,

    runInitialSetup,
    endRound,
    startOver,
  };
};

export default useComparison;
