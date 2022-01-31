#!/usr/bin/env node

const wordleGuess = (guessWord: string, solutionWord: string) => {
  if (solutionWord.length !== 5 || guessWord.length !== 5) {
    console.log("Word must be 5 letters");
    return;
  }

  const guessLetters = [...guessWord];
  const solutionLetters = [...solutionWord];
  const unusedLetters = [...solutionWord];
  let answer = ["⬛", "⬛", "⬛", "⬛", "⬛"];

  for (let i = 0; i < solutionLetters.length; i++) {
    if (solutionLetters[i] === guessLetters[i]) {
      answer[i] = "🟩";
      delete unusedLetters[i];
    }
  }

  for (let i = 0; i < solutionLetters.length; i++) {
    if (answer[i] !== "🟩" && unusedLetters.includes(guessLetters[i])) {
      answer[i] = "🟨";
      // delete used yellow letters
      delete unusedLetters[unusedLetters.indexOf(guessLetters[i])];
    }
  }

  console.log(answer.join(""));
};

let solutionWord = "banal";

wordleGuess("annal", solutionWord);
// wordleGuess("lodge", solutionWord);
// wordleGuess("fudge", solutionWord);
