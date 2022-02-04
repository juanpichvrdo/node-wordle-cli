#!/usr/bin/env node
import inquirer from "inquirer";

import getWord from "./get-word";
import computeGuess from "./compute-guess";

import { LetterColor, LetterGuess } from "./types";

const wordleGuess = (guessWord: string, solutionWord: string) => {
  // if (solutionWord.length !== 5 || guessWord.length !== 5) {
  //   console.log("Word must be 5 letters");
  //   return;
  // }

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

  computeGuess(guessArr);
};

// wordleGuess("annal", "banal");
// wordleGuess("union", "banal");
// wordleGuess("alloy", "banal");
// wordleGuess("banal", "banal");

const solutionWord = getWord();
let tries = 0;

const guess = async () => {
  const answer = await inquirer.prompt({
    name: `guess_${tries}`,
    type: "input",
    // TODO: Fix validate function not allowing to delete input
    validate: async (input, answer) => {
      console.log(input, answer);

      // TODO: validate is a valid word here
      if (input.length !== 5) {
        return "Word must be 5 letters";
      }
      tries++;
      return input;
    },
  });

  wordleGuess(answer[`guess_${tries}`], solutionWord);

  if (tries < 6) {
    guess();
  }
};

const startGame = async () => {
  console.clear();
  console.log(solutionWord);
  guess();
};

startGame();
