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
      // delay for animation before showing results
      setTimeout(() => {
        setAppState(AppState.results);
      }, 1000);
    } else {
      setIndex(index + 1);
    }
  };

  const startOver = () => {
    setAppState(AppState.initial);
  };

  return {
    appState,
    pairings,
    scores,
    index,

    runInitialSetup,
    endRound,
    startOver,
  };
};

export default useComparison;
