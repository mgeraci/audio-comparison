import { useEffect, useRef, useState } from "react";
import { AppState, Pairing, Score } from "../types";
import { shuffle, getPairs } from "../util"

const FILES = [
    "cockrum.aif",
    "crescent.aif",
    "original.aif",
    "goldtone.aif",
];

const useComparison = () => {
    const [appState, setAppState] = useState<AppState>(AppState.initial)
    const [orderedFiles, setOrderedFiles] = useState<string[]>([]);
    const [pairings, setPairings] = useState<Pairing[]>([]);
    const [scores, setScores] = useState<Score[]>([]);
    const [index, setIndex] = useState(0);

    const runInitialSetup = () => {
        const shuffledFiles = shuffle([...FILES]);
        setOrderedFiles(shuffledFiles);
        setPairings(shuffle(getPairs(shuffledFiles)));
        setIndex(0);
    };

    const endRound = (pairing: Pairing, winner: string) => {
        if (index >= pairings.length) {
            setAppState(AppState.results)
            return;
        }

        setScores([...scores, { pairing, winner }])
        setIndex(index + 1)
    };

    const currentPairing = pairings[index];

    return {
        orderedFiles,
        pairings,
        currentPairing,
        scores,
        index,

        runInitialSetup,
        endRound,
    };
};

export default useComparison;