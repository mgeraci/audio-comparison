This is a React/Next.js project bootstrapped with `create-next-app`. It lets you play audio samples in random pairings to let you vote for favorites and find a winner.

| Comparison                                          | Results                                          |
| --------------------------------------------------- | ------------------------------------------------ |
| <img src="/screenshots/comparison.png" width="300"> | <img src="/screenshots/results.png" width="100"> |

## Development

1. clone the repo and cd into it
1. install dependencies with `yarn install`
1. run the server with `yarn dev`
1. open [http://localhost:3000](http://localhost:3000) with your browser to see the app

## Design

1. have array of audio files. any number should be ok.
1. shuffle their order, assign each one a letter starting with A and incrementing for each.
1. create a static list of each pairing of files.
1. for each pairing, display the two files, let the user play each one, and pick a winner.
1. track each file's score (when it is picked as a winner, it gets one point).
1. after all pairings have been scored, show the results — the files in order of most-to-fewest points, and their names.
