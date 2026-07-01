import { useEffect, useRef, useState } from "react";
import { Pairing } from "../types";
import { shuffle, getPairs } from "../util"

const FILES = [
    "cockrum.aif",
    "crescent.aif",
    "original.aif",
    "goldtone.aif",
];

const useComparison = () => {
    const [orderedFiles, setOrderedFiles] = useState<string[]>([]);
    const [pairings, setPairings] = useState<Pairing[]>([]);
    const [index, setIndex] = useState(0);

    const runInitialSetup = () => {
        const shuffledFiles = shuffle([...FILES]);
        setOrderedFiles(shuffledFiles);
        setPairings(shuffle(getPairs(shuffledFiles)));
        setIndex(0);
    };

    const endRound = (file: string) => {
        if (index >= pairings.length) {
            return;
        }

        // TODO: save score
        setIndex(index + 1)
    };

    const currentPairing = pairings[index];

    return {
        orderedFiles,
        pairings,
        currentPairing,
        index,

        runInitialSetup,
        endRound,
    };
};

export default useComparison;