#!/usr/bin/env node
import chalk from "chalk";
import getWord from "./get-word";
import guess from "./guess";

let firstGame = true;

export const startGame = async () => {
  console.clear();

  if (firstGame) {
    console.log(
      chalk.cyan(`
      Guess the word in six tries!
      Each guess must be a valid five-letter word.
      After each guess, the color of the word will 
      change to show how close your guess was to the word
    `)
    );
    firstGame = false;
  }

  const solutionWord = getWord().toUpperCase();
  const guessNumber = 1;
  console.log(solutionWord);

  await guess(solutionWord, guessNumber);
};

startGame();
