#!/usr/bin/env node
import inquirer from "inquirer";

import { LetterColor, LetterGuess } from "./types";

import getWord from "./get-word";
import computeGuess from "./compute-guess";
import validateInput from "./validate-input";
import endgameFeedback from "./endgame-feedback";

const wordleGuess = (guessWord: string, solutionWord: string): LetterGuess[] => {
  const guessLetters = [...guessWord];
  const solutionLetters = [...solutionWord];
  const unusedLetters = [...solutionWord];
  const guessArr: LetterGuess[] = [];

  guessLetters.forEach((letter) => {
    guessArr.push({
      letter,
      color: LetterColor.Black,
    });
  });

  solutionLetters.forEach((letter, i) => {
    if (solutionLetters[i] === guessLetters[i]) {
      guessArr[i] = {
        letter,
        color: LetterColor.Green,
      };

      delete unusedLetters[i];
    }
  });

  solutionLetters.forEach((letter, i) => {
    const isNotCorrectLetter = guessArr[i].color !== LetterColor.Green;
    const isInSolution = unusedLetters.includes(guessLetters[i]);

    if (isNotCorrectLetter && isInSolution) {
      guessArr[i] = {
        letter: guessLetters[i],
        color: LetterColor.Yellow,
      };

      // delete used yellow letters
      delete unusedLetters[unusedLetters.indexOf(guessLetters[i])];
    }
  });

  return guessArr;
};

const guess = async (solutionWord: string, guessNumber: number) => {
  const answer = await inquirer.prompt({
    name: `guess_${guessNumber}`,
    type: "input",
    message: `Guess ${guessNumber}/6`,
  });

  const inputGuess = answer[`guess_${guessNumber}`].toLowerCase();

  const isValid = validateInput(inputGuess);

  if (isValid) {
    const guessData = wordleGuess(inputGuess, solutionWord);

    const isGuessCorrect = computeGuess(guessData);
    await endgameFeedback(isGuessCorrect, solutionWord, guessNumber);

    if (guessNumber < 6) {
      guessNumber++;
      guess(solutionWord, guessNumber);
    }
  } else {
    guess(solutionWord, guessNumber);
  }
};

export const startGame = async () => {
  console.clear();

  const solutionWord = getWord();
  const guessNumber = 1;
  console.log(solutionWord);

  await guess(solutionWord, guessNumber);
};

startGame();
