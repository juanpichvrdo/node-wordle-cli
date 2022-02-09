import { LetterColor, LetterGuess } from "./types";

export default function computeGuess(guessWord: string, solutionWord: string): LetterGuess[] {
  const guessLetters = [...guessWord];
  const solutionLetters = [...solutionWord];
  const unusedLetters = [...solutionWord];
  const guessArr: LetterGuess[] = [];

  guessLetters.forEach((letter) => {
    guessArr.push({
      letter,
      color: LetterColor.Black,
    });
  });

  solutionLetters.forEach((letter, i) => {
    if (solutionLetters[i] === guessLetters[i]) {
      guessArr[i] = {
        letter,
        color: LetterColor.Green,
      };

      delete unusedLetters[i];
    }
  });

  solutionLetters.forEach((letter, i) => {
    const isNotCorrectLetter = guessArr[i].color !== LetterColor.Green;
    const isInSolution = unusedLetters.includes(guessLetters[i]);

    if (isNotCorrectLetter && isInSolution) {
      guessArr[i] = {
        letter: guessLetters[i],
        color: LetterColor.Yellow,
      };

      // delete used yellow letters
      delete unusedLetters[unusedLetters.indexOf(guessLetters[i])];
    }
  });

  return guessArr;
}
