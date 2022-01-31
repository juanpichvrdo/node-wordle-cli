#!/usr/bin/env node

const wordleGuess = (guess: string, solutionWord: string) => {
  if (solutionWord.length !== 5 || guess.length !== 5) {
    console.log("Word must be 5 letters");
    return;
  }

  let result = "";

  for (let i = 0; i < guess.length; i++) {
    const letter = guess[i];
    let emoji = "⬛";

    if (solutionWord.includes(letter)) {
      emoji = "🟨";

      if (letter === solutionWord[i]) {
        emoji = "🟩";
      }
    }

    result = result.concat(emoji);
  }

  console.log(result);
};

let solutionWord = "parks";

wordleGuess("ppple", solutionWord);
wordleGuess("lodge", solutionWord);
wordleGuess("fudge", solutionWord);
