"use client";

import { Ref, useState } from "react";
import classNames from "classnames";

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
      <audio ref={ref} src={`/audio-comparison/audio/${sample}`} />

      <div className={styles.playbackControls}>
        <button className={styles.playbackButton} onClick={resetTime}>
          ◀<span className={styles.backButtonPipe}>|</span>
        </button>
        <button className={styles.playbackButton} onClick={stop}>
          ■
        </button>
        <button
          className={classNames(styles.playbackButton, {
            [styles.isActive]: isPlaying,
          })}
          onClick={play}
        >
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

      {isPlaying && <span className={styles.speakerIcon}>🔊</span>}
    </div>
  );
};

export default SampleView;
