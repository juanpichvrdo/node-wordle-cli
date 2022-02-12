#!/usr/bin/env node
import getWord from "./get-word";
import guess from "./guess";

export const startGame = async () => {
  console.clear();

  const solutionWord = getWord().toUpperCase();
  const guessNumber = 1;
  console.log(solutionWord);

  await guess(solutionWord, guessNumber);
};

startGame();
