import inquirer from "inquirer";

import validateInput from "./validate-input";
import computeGuess from "./compute-guess";
import colorGuess from "./color-text";
import handleAlphabet from "./handle-alphabet";
import shouldEndGame from "./should-end-game";
import { NUMBER_OF_TRIES } from "./helpers/constants";
import { LetterColor } from "./helpers/types";

export default async function guess(solutionWord: string, guessNumber: number) {
  const answer = await inquirer.prompt({
    name: `guess_${guessNumber}`,
    type: "input",
    message: `Guess ${guessNumber}/${NUMBER_OF_TRIES}`,
  });

  const inputGuess = answer[`guess_${guessNumber}`].toUpperCase();

  const isValid = validateInput(inputGuess);

  if (isValid) {
    const guessData = computeGuess(inputGuess, solutionWord);

    const coloredGuess = colorGuess(guessData).join("");
    console.log(coloredGuess);

    handleAlphabet(guessData);

    if (guessNumber > 1) {
      deletePreviousAbecedary();
    }

    const isGuessCorrect = guessData.every(({ letter, color }) => color === LetterColor.Green);

    await shouldEndGame(isGuessCorrect, solutionWord, guessNumber);

    if (guessNumber < NUMBER_OF_TRIES) {
      guessNumber++;
      guess(solutionWord, guessNumber);
    }
  } else {
    guess(solutionWord, guessNumber);
  }
}

const deletePreviousAbecedary = () => {
  process.stdout.moveCursor(0, -4);
  process.stdout.clearLine(1);
  process.stdout.moveCursor(0, 4);
};
