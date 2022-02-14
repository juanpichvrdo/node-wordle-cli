import chalk from "chalk";
import { allWords } from "./helpers/words";

export default function validateInput(input: string): boolean {
  if (input.trim() === "") {
    console.log(chalk.yellowBright("Need to input a word."));
    return false;
  }

  if (input.trim().length !== 5) {
    console.log(chalk.yellowBright(`Word must be 5 letters, ${input} has ${input.length}.`));
    return false;
  }

  const isNotValidWord = !allWords.includes(input.toLowerCase());

  if (isNotValidWord) {
    console.log(chalk.yellowBright("Must be a valid english word."));
    return false;
  }

  return true;
}
