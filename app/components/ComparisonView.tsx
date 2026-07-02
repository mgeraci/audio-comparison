import React from "react";
import { Pairing } from "../types";

import styles from "./ComparisonView.module.scss";

interface Props {
  pairing: Pairing;
  currentIndex: number;
  total: number;
  endRound: (pairing: Pairing, winner: string) => void;
}

const ComparisonView: React.FC<Props> = ({
  pairing,
  currentIndex,
  total,
  endRound,
}) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        Current Matchup ({currentIndex}/{total})
      </h2>
      <div className={styles.samples}>
        <div className={styles.sample}>
          <span>{pairing[0]}</span>
          <button
            className={styles.voteButton}
            onClick={() => endRound(pairing, pairing[0])}
          >
            choose left winner
          </button>
        </div>

        <span>vs.</span>

        <div className={styles.sample}>
          <span>{pairing[1]}</span>
          <button
            className={styles.voteButton}
            onClick={() => endRound(pairing, pairing[1])}
          >
            choose right winner
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComparisonView;
