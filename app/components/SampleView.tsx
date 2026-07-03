"use client";

import { Ref } from "react";
import SpeakerIcon from "@/public/speaker.svg";

// import speakerIcon from "../speaker.svg";
import styles from "./SampleView.module.scss";

interface Props {
  sample: string;
  ref: Ref<HTMLAudioElement>;
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
  return (
    <div className={styles.sample}>
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

      <button className={styles.voteButton} onClick={endRound}>
        choose winner
      </button>

      {isPlaying && (
        <SpeakerIcon alt="playing" className={styles.speakerIcon} />
      )}
    </div>
  );
};

export default SampleView;
