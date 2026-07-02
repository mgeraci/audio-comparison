import { Score } from "../types";

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
    <div>
      Results:
      <br />
      <dl>
        {distillResults(scores).map((score) => (
          <div key={`${score[0]}-${score[1]}`}>
            <dt>{score[0]}</dt>
            <dd>{score[1]}</dd>
          </div>
        ))}
      </dl>
      <br />
      matchup details:
      <br />
      {scores.map(({ pairing, winner }) => (
        <div key={`${pairing[0]}-${pairing[1]}`}>
          <span
            style={{ fontWeight: pairing[0] === winner ? "bold" : "regular" }}
          >
            {pairing[0]}
          </span>
          <span>&nbsp;vs.&nbsp;</span>
          <span
            style={{ fontWeight: pairing[1] === winner ? "bold" : "regular" }}
          >
            {pairing[1]}
          </span>
          <br />
        </div>
      ))}
      <br />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => startOver()}
      >
        start over
      </button>
    </div>
  );
};

export default ResultsView;
