import chalk from "chalk";
import { LetterColor, LetterGuess } from "./types";

const { bgBlack, bgYellow, bgGreen } = chalk;

const chalkColors = {
  black: bgBlack,
  yellow: bgYellow,
  green: bgGreen,
};

export default function colorGuess(guessArr: LetterGuess[]): boolean {
  const coloredGuessText = guessArr
    .map((letter) => chalkColors[letter.color](letter.letter))
    .join("");

  console.log(coloredGuessText);

  const isGuessCorrect = guessArr.every((letter) => letter.color === LetterColor.Green);

  return isGuessCorrect;
}
