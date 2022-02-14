import chalk from "chalk";
import { LetterColor, LetterGuess } from "./helpers/types";

export default function colorText(
  letterArr: LetterGuess[],
  strikethroughWrong: boolean = false
): string {
  return letterArr
    .map(({ letter, color }) => {
      if (strikethroughWrong && color === LetterColor.Gray) {
        return chalk[color].strikethrough(letter);
      } else {
        return chalk[color](letter);
      }
    })
    .join(" ");
}
