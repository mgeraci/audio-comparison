import React, { useRef } from "react";
import { Pairing, PlaybackType } from "../types";

import styles from "./ComparisonView.module.scss";
import SampleView from "./SampleView";

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
  const sampleA = useRef<HTMLAudioElement>(null);
  const sampleB = useRef<HTMLAudioElement>(null);

  const play = (playbackType: PlaybackType) => {
    if (!sampleA.current || !sampleB.current) {
      return;
    }

    sampleA.current.volume = playbackType === PlaybackType.a ? 1 : 0;
    sampleB.current.volume = playbackType === PlaybackType.b ? 1 : 0;

    sampleA.current.play();
    sampleB.current.play();
  };

  const stop = () => {
    if (!sampleA.current || !sampleB.current) {
      return;
    }

    sampleA.current.pause();
    sampleB.current.pause();
    sampleA.current.currentTime = 0;
    sampleB.current.currentTime = 0;
  };

  const resetTime = () => {
    if (!sampleA.current || !sampleB.current) {
      return;
    }

    sampleA.current.currentTime = 0;
    sampleB.current.currentTime = 0;
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        Current Matchup ({currentIndex}/{total})
      </h2>
      <div className={styles.samples}>
        <SampleView
          sample={pairing[0]}
          ref={sampleA}
          play={() => play(PlaybackType.a)}
          stop={stop}
          resetTime={resetTime}
          endRound={() => {
            endRound(pairing, pairing[0]);
          }}
        />

        <span className={styles.versus}>vs.</span>

        <SampleView
          sample={pairing[1]}
          ref={sampleB}
          play={() => play(PlaybackType.b)}
          stop={stop}
          resetTime={resetTime}
          endRound={() => {
            endRound(pairing, pairing[1]);
          }}
        />
      </div>
    </div>
  );
};

export default ComparisonView;
