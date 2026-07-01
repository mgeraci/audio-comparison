import { useEffect, useRef, useState } from "react";
import { Mapping, Pairing } from "../types";
import { shuffle } from "../util"

const FILES = [
    "cockrum.aif",
    "crescent.aif",
    "original.aif",
    "goldtone.aif",
];

const useComparison = () => {
    const [orderedFiles, setOrderedFiles] = useState<string[]>();
    const [mapping, setMapping] = useState<Mapping>();
    const [pairings, setPairings] = useState<Pairing[]>();

    const runInitialSetup = () => {
        const shuffledFiles = shuffle([...FILES]);
        setOrderedFiles(shuffledFiles);
    };

    return {
        orderedFiles,
        mapping,
        pairings,
        runInitialSetup,
    };
};

export default useComparison;