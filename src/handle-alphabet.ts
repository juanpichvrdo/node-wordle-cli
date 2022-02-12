import { LetterColor, LetterGuess } from "./helpers/types";
import alphabet from "./helpers/alphabet";
import colorGuess from "./color-text";

export default function handleAlphabet(usedLetters: LetterGuess[]) {
  const usedLettersWithoutDuplicates = usedLetters.filter(({ letter }, index) => {
    return (
      index === usedLetters.findIndex(({ letter: letterOcurrence }) => letter === letterOcurrence)
    );
  });

  usedLettersWithoutDuplicates.forEach((letterGuess) => {
    const index = alphabet.findIndex(({ letter }) => letter === letterGuess.letter);

    if (alphabet[index].color !== LetterColor.Green) {
      alphabet[index].color = letterGuess.color;
    }
  });

  const coloredAlphabet = colorGuess(alphabet).join(" ");

  // TODO: only show one alphabet delete older if new one logs to the screen
  console.log(coloredAlphabet);
}
