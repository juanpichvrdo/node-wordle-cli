import inquirer from "inquirer";

import computeGuess from "./compute-guess";
import colorGuess from "./color-guess";
import validateInput from "./validate-input";
import endgameFeedback from "./endgame-feedback";

export default async function guess(solutionWord: string, guessNumber: number) {
  const answer = await inquirer.prompt({
    name: `guess_${guessNumber}`,
    type: "input",
    message: `Guess ${guessNumber}/6`,
  });

  const inputGuess = answer[`guess_${guessNumber}`].toLowerCase();

  const isValid = validateInput(inputGuess);

  if (isValid) {
    const guessData = computeGuess(inputGuess, solutionWord);

    const isGuessCorrect = colorGuess(guessData);
    await endgameFeedback(isGuessCorrect, solutionWord, guessNumber);

    if (guessNumber < 6) {
      guessNumber++;
      guess(solutionWord, guessNumber);
    }
  } else {
    guess(solutionWord, guessNumber);
  }
}
