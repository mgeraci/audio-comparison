This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Design

Goals:
1. have array of audio files. any number should be ok.
2. shuffle their order, assign each one a letter starting with A and incrementing for each.
3. create a static list of each pairing of files.
4. for each pairing, display the two files, let the user play each one, and pick a winner.
5. track each file's score (when it is picked as a winner, it gets one point).
6. after all pairings have been scored, show the results — the files in order of most-to-fewest points, and their names.

Data structure:
- `files`: user set array of file names, used to point to the files in a static folder.
- `letterMapping`: key value store of a letter (key) to a filename (value). used for display to obfuscate the file names to the user.
- `pairings`: a list of all possible pairings between files