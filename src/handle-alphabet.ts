import { LetterColor, LetterGuess } from "./helpers/types";
import alphabet from "./helpers/alphabet";
import colorText from "./color-text";

export default function handleAlphabet(usedLetters: LetterGuess[]): string {
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

  return colorText(alphabet, true);
}
