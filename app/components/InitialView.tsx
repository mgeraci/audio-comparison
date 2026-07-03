import React from "react";
import { AppState } from "../types";

import styles from "./InitialView.module.scss";

interface Props {
  runInitialSetup: () => void;
  appState: AppState;
}

const InitialView: React.FC<Props> = ({ runInitialSetup, appState }) => {
  return (
    <div className={styles.wrapper}>
      <span>
        Help Michael choose the bridge on his banjo! He recorded a snippet of
        the same song using a handful of bridges, and this app will pit each
        pair against each other, let you vote, then show the winner.
        <br />
        <br />
        Grab some nice headphones, then press the button below to randomize the
        samples and start voting (or to reset once you have begun).
      </span>

      <button className={styles.button} onClick={runInitialSetup}>
        {appState === AppState.initial ? "Let’s go!" : "Reset"}
      </button>
    </div>
  );
};

export default InitialView;
