"use client";

import { Ref, useState } from "react";
import classNames from "classnames";
import SpeakerIcon from "@/public/speaker.svg";

// import speakerIcon from "../speaker.svg";
import styles from "./SampleView.module.scss";

interface Props {
  sample: string;
  ref: Ref<HTMLAudioElement> | undefined;
  isPlaying: boolean;
  play: () => void;
  stop: () => void;
  resetTime: () => void;
  endRound: () => void;
}

const SampleView: React.FC<Props> = ({
  sample,
  ref,
  isPlaying,
  play,
  stop,
  resetTime,
  endRound,
}) => {
  const [isWinner, setIsWinner] = useState<boolean>(false);

  return (
    <div className={classNames(styles.sample, { [styles.winner]: isWinner })}>
      <audio ref={ref} src={`../audio/${sample}`} />

      <div className={styles.playbackControls}>
        <button className={styles.playbackButton} onClick={resetTime}>
          ◀<span className={styles.backButtonPipe}>|</span>
        </button>
        <button className={styles.playbackButton} onClick={stop}>
          ■
        </button>
        <button className={styles.playbackButton} onClick={play}>
          ▶
        </button>
      </div>

      <button
        className={styles.voteButton}
        onClick={() => {
          setIsWinner(true);
          endRound();
        }}
      >
        choose winner
      </button>

      {isPlaying && (
        <SpeakerIcon alt="playing" className={styles.speakerIcon} />
      )}
    </div>
  );
};

export default SampleView;
