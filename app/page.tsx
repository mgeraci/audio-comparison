'use client'

import useComparison from "./hooks/useComparisons";
import { getIdentifierForFile } from "./util"

export default function Home() {
  const { runInitialSetup, orderedFiles, pairings } = useComparison();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={runInitialSetup}
          >
            {orderedFiles?.length == 0 ? "initialize" : "reset"}
          </button>
          <br />
          {orderedFiles.map((file) => (
            <span key={file}>{file} ({getIdentifierForFile(file, orderedFiles)})</span>
          ))}
          {pairings?.map((pairing, i) => (
            <span key={i}>{pairing[0]} vs. {pairing[1]}</span>
          ))}
        </div>
      </main>
    </div>
  );
}
