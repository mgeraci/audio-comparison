import React from "react";
import { AppState } from "../types";

interface Props {
  runInitialSetup: () => void;
  appState: AppState;
}

const InitialView: React.FC<Props> = ({ runInitialSetup, appState }) => {
  return (
    <div>
      <span>
        Press the button below to randomize the samples and start voting, or to
        reset once you have begun.
      </span>

      <br />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={runInitialSetup}
      >
        {appState === AppState.initial ? "initialize" : "reset"}
      </button>
    </div>
  );
};

export default InitialView;
