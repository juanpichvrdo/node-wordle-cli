import chalk from "chalk";
import { NUMBER_OF_TRIES } from "./helpers/constants";

const { red, green, cyan } = chalk;

export default async function shouldEndGame(
  isGuessCorrect: boolean,
  solutionWord: string,
  guessNumber: number
) {
  const lastChance = guessNumber === NUMBER_OF_TRIES - 1;
  const outOfGuesses = guessNumber === NUMBER_OF_TRIES;

  if (lastChance && !isGuessCorrect) {
    console.log("\n");
    console.log(red("Last chance!"));
  }

  if (isGuessCorrect) {
    console.log("\n");
    console.log(`${green(solutionWord)} was the correct word!`);
    const usePlural = guessNumber > 1;
    console.log("\n");
    console.log(`Guessed in ${guessNumber} ${usePlural ? "tries." : "try!"}`);

    return true;
  }

  if (outOfGuesses) {
    console.log("\n");
    console.log(`Sorry, the correct word was ${cyan(solutionWord)}.`);
    console.log("\n");

    return true;
  }

  return false;
}
