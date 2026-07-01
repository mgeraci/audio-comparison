'use client'

import useComparison from "./hooks/useComparisons";

export default function Home() {
  const { runInitialSetup, orderedFiles } = useComparison();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          {orderedFiles}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={runInitialSetup}>initialize</button>
        </div>
      </main>
    </div>
  );
}
