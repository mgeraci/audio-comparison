import classnames from "classnames";
import { Score } from "../types";

import styles from "./ResultsView.module.scss";

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
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Results</h2>
      <div className={styles.results}>
        {distillResults(scores).map((score, i) => (
          <div key={`${score[0]}-${score[1]}`}>
            {i === 0 && "🏆 "}
            {score[0]} ({score[1]} points)
          </div>
        ))}
      </div>

      <h2 className={styles.title}>Details</h2>

      <div className={styles.details}>
        {scores.map(({ pairing, winner }) => (
          <div key={`${pairing[0]}-${pairing[1]}`}>
            <span
              className={classnames({
                [styles.matchupWinner]: pairing[0] === winner,
              })}
            >
              {pairing[0]}
            </span>
            <span>&nbsp;vs.&nbsp;</span>
            <span
              className={classnames({
                [styles.matchupWinner]: pairing[1] === winner,
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
