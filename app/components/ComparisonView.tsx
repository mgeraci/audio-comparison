import React from "react";
import { Pairing } from "../types";

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
    <div>
      current matchup ({currentIndex}/{total}):
      <div>
        <span>
          {pairing[0]} vs. {pairing[1]}
        </span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => endRound(pairing, pairing[0])}
        >
          choose left winner
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => endRound(pairing, pairing[1])}
        >
          choose right winner
        </button>
      </div>
    </div>
  );
};

export default ComparisonView;
