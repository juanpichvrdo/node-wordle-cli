import chalk from "chalk";
import { LetterGuess } from "./types";

const { bgBlack, bgYellow, bgGreen } = chalk;

const chalkColors = {
  black: bgBlack,
  yellow: bgYellow,
  green: bgGreen,
};

export default function computeGuess(guessArr: LetterGuess[]) {
  const coloredArry = guessArr
    .map((letter) => {
      return chalkColors[letter.color](letter.letter);
    })
    .join("");

  console.log(coloredArry);
}
