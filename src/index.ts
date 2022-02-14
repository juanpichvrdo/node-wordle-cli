#!/usr/bin/env node
import chalk from "chalk";

import showInstructions from "./show-instructions";
import getWord from "./get-word";
import guess from "./guess";
import { REPOSITORY_LINK } from "./helpers/constants";

let firstGame = true;
let solutionWord: string;

export default async function startGame() {
  console.clear();

  if (firstGame) {
    console.log(showInstructions());

    firstGame = false;
  }

  solutionWord = getWord().toUpperCase();

  const guessNumber = 1;

  await guess(solutionWord, guessNumber);
}

startGame();

const { cyan, white } = chalk;

const exitModes = [`exit`, `SIGINT`, `SIGUSR1`, `SIGUSR2`, `SIGTERM`];

exitModes.forEach((eventType) => {
  process.on(eventType, () => {
    console.log(`
    ${cyan(`The solution was ${white(solutionWord)}.`)}



    ${cyan.underline(REPOSITORY_LINK)}
    
    ${white("Thanks for playing!")}
  `);
  });
});
