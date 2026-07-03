import classnames from "classnames";
import { Score } from "../types";

import styles from "./ResultsView.module.scss";
import { useMemo } from "react";

interface Props {
  startOver: () => void;
  scores: Score[];
}

const distillResults = (scores: Score[]) => {
  const results: Record<string, number> = {};

  scores.forEach(({ winner }) => {
    if (results[winner] !== undefined) {
      results[winner] += 1;
    } else {
      results[winner] = 1;
    }
  });

  const sorted: [string, number][] = Object.entries(results).sort(
    ([, a], [, b]) => b - a,
  );

  return sorted;
};

const ResultsView: React.FC<Props> = ({ startOver, scores }) => {
  const distilledResults = useMemo(() => distillResults(scores), [scores]);
  const highScore = distilledResults[0][1];

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Results</h2>
      <div className={styles.results}>
        {distilledResults.map(([sample, points]) => (
          <div
            key={sample}
            className={classnames({ [styles.winner]: points === highScore })}
          >
            {sample} ({points} points)
          </div>
        ))}
      </div>

      <h2 className={styles.title}>Details</h2>

      <div className={styles.details}>
        {scores.map(({ pairing, winner }) => (
          <div key={`${pairing[0]}-${pairing[1]}`}>
            <span
              className={classnames({
                [styles.winner]: pairing[0] === winner,
              })}
            >
              {pairing[0]}
            </span>
            <span>&nbsp;vs.&nbsp;</span>
            <span
              className={classnames({
                [styles.winner]: pairing[1] === winner,
              })}
            >
              {pairing[1]}
            </span>
            <br />
          </div>
        ))}
      </div>

      <button className={styles.startOver} onClick={() => startOver()}>
        start over
      </button>
    </div>
  );
};

export default ResultsView;
