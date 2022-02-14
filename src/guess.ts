import inquirer from "inquirer";

import startGame from "./index";
import validateInput from "./validate-input";
import computeGuess from "./compute-guess";
import colorText from "./color-text";
import handleAlphabet from "./handle-alphabet";
import shouldEndGame from "./should-end-game";
import { NUMBER_OF_TRIES } from "./helpers/constants";
import alphabet from "./helpers/alphabet";
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

    const coloredGuess = colorText(guessData);
    console.log(coloredGuess);

    const coloredAlphabet = handleAlphabet(guessData);
    console.log(coloredAlphabet);

    const isGuessCorrect = guessData.every(({ color }) => color === LetterColor.Green);
    const gameOver = await shouldEndGame(isGuessCorrect, solutionWord, guessNumber);

    if (gameOver) {
      const shouldPlayAgain = await askToPlayAgain();

      if (shouldPlayAgain) {
        // Reset alphabet
        alphabet.forEach((letter) => (letter.color = LetterColor.White));

        await startGame();
      } else {
        process.exit();
      }
    }

    if (guessNumber < NUMBER_OF_TRIES) {
      guessNumber++;
      await guess(solutionWord, guessNumber);
    }
  } else {
    await guess(solutionWord, guessNumber);
  }
}

const askToPlayAgain = async () => {
  const answer = await inquirer.prompt({
    name: `play_again`,
    type: "confirm",
    message: `Play again?`,
  });

  return answer.play_again;
};
