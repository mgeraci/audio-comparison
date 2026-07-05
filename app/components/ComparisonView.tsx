import React, { useRef, useState } from "react";
import { Pairing, PlaybackType } from "../types";

import styles from "./ComparisonView.module.scss";
import SampleView from "./SampleView";
import classNames from "classnames";

interface Props {
  pairings: Pairing[];
  currentIndex: number;
  total: number;
  endRound: (pairing: Pairing, winner: string) => void;
}

const ComparisonView: React.FC<Props> = ({
  pairings,
  currentIndex,
  total,
  endRound,
}) => {
  const [playingSample, setPlayingSample] = useState<PlaybackType>();
  const sampleA = useRef<HTMLAudioElement>(null);
  const sampleB = useRef<HTMLAudioElement>(null);

  const play = (playbackType: PlaybackType) => {
    if (!sampleA.current || !sampleB.current) {
      return;
    }

    setPlayingSample(playbackType);
    sampleA.current.volume = playbackType === PlaybackType.a ? 1 : 0;
    sampleB.current.volume = playbackType === PlaybackType.b ? 1 : 0;

    sampleA.current.play();
    sampleB.current.play();
  };

  const stop = () => {
    if (!sampleA.current || !sampleB.current) {
      return;
    }

    setPlayingSample(undefined);
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
        Current Matchup ({currentIndex + 1}/{total})
      </h2>

      <div className={styles.samplesContainer}>
        {pairings.map((pairing, i) => (
          <div
            key={`${pairing[0]}-${pairing[1]}`}
            className={classNames(styles.samples, {
              [styles.current]: currentIndex == pairings.indexOf(pairing),
              [styles.exit]: currentIndex > pairings.indexOf(pairing),
            })}
            style={{ zIndex: pairings.length - pairings.indexOf(pairing) }}
          >
            <SampleView
              sample={pairing[0]}
              ref={currentIndex === i ? sampleA : undefined}
              isPlaying={playingSample === PlaybackType.a}
              play={() => play(PlaybackType.a)}
              stop={stop}
              resetTime={resetTime}
              endRound={() => {
                stop();
                endRound(pairing, pairing[0]);
              }}
            />

            <span className={classNames(styles.versus, styles.big)}>
              versus
            </span>
            <span className={classNames(styles.versus, styles.small)}>vs.</span>

            <SampleView
              sample={pairing[1]}
              ref={currentIndex === i ? sampleB : undefined}
              isPlaying={playingSample === PlaybackType.b}
              play={() => play(PlaybackType.b)}
              stop={stop}
              resetTime={resetTime}
              endRound={() => {
                stop();
                endRound(pairing, pairing[1]);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonView;
