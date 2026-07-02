"use client";

import useComparison from "./hooks/useComparisons";
import { AppState } from "./types";

import styles from "./page.module.scss";

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
    <>
      <header>
        <h1 className={styles.title}>Audio Comparison</h1>
      </header>
      <main className={styles.main}>
        {appState !== AppState.results && (
          <InitialView runInitialSetup={runInitialSetup} appState={appState} />
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
      </main>
    </>
  );
}
