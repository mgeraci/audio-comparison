"use client";

import useComparison from "./hooks/useComparisons";
import { AppState } from "./types";

import InitialView from "./components/InitialView";
import ComparisonView from "./components/ComparisonView";
import ResultsView from "./components/ResultsView";

export default function Home() {
  const {
    appState,
    pairings,
    currentPairing,
    scores,
    index,
    runInitialSetup,
    endRound,
    startOver,
  } = useComparison();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          {appState !== AppState.results && (
            <InitialView
              runInitialSetup={runInitialSetup}
              appState={appState}
            />
          )}

          {appState === AppState.comparing && currentPairing !== undefined && (
            <ComparisonView
              pairing={currentPairing}
              currentIndex={index + 1}
              total={pairings.length}
              endRound={endRound}
            />
          )}

          {appState === AppState.results && (
            <ResultsView startOver={startOver} scores={scores} />
          )}
        </div>
      </main>
    </div>
  );
}
