import inquirer from "inquirer";

import computeGuess from "./compute-guess";
import colorGuess from "./color-guess";
import validateInput from "./validate-input";
import shouldEndGame from "./should-end-game";
import { NUMBER_OF_GUESSES } from "./constants";

export default async function guess(solutionWord: string, guessNumber: number) {
  const answer = await inquirer.prompt({
    name: `guess_${guessNumber}`,
    type: "input",
    message: `Guess ${guessNumber}/${NUMBER_OF_GUESSES}`,
  });

  const inputGuess = answer[`guess_${guessNumber}`].toLowerCase();

  const isValid = validateInput(inputGuess);

  if (isValid) {
    const guessData = computeGuess(inputGuess, solutionWord);

    const isGuessCorrect = colorGuess(guessData);

    await shouldEndGame(isGuessCorrect, solutionWord, guessNumber);

    if (guessNumber < NUMBER_OF_GUESSES) {
      guessNumber++;
      guess(solutionWord, guessNumber);
    }
  } else {
    guess(solutionWord, guessNumber);
  }
}
