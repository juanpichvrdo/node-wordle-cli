import chalk from "chalk";
import { LetterGuess } from "./helpers/types";

export default function colorText(letterArr: LetterGuess[]) {
  return letterArr.map(({ letter, color }) => chalk[color](letter));
}
