#!/usr/bin/env node
import inquirer from "inquirer";
import getWord from "./get-word";

enum LetterColor {
  Black = "black",
  Yellow = "yellow",
  Green = "green",
}

interface LetterGuess {
  letter: string;
  color: LetterColor;
}

const wordleGuess = (guessWord: string, solutionWord: string) => {
  if (solutionWord.length !== 5 || guessWord.length !== 5) {
    console.log("Word must be 5 letters");
    return;
  }

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

  // TODO
  // computeGuess(guessArr)
  console.log(guessArr);
};

wordleGuess("annal", "banal");
wordleGuess("union", "banal");
wordleGuess("alloy", "banal");
wordleGuess("banal", "banal");

// let solutionWord = getWord();

// const guess1 = async () => {
//   const answer = await inquirer.prompt({
//     name: "guess_1",
//     type: "input",
//   });

//   return wordleGuess(answer.guess_1, solutionWord);
// };

// const guess2 = async () => {
//   const answer = await inquirer.prompt({
//     name: "guess_2",
//     type: "input",
//   });

//   return wordleGuess(answer.guess_2, solutionWord);
// };

// const guess3 = async () => {
//   const answer = await inquirer.prompt({
//     name: "guess_3",
//     type: "input",
//   });

//   return wordleGuess(answer.guess_3, solutionWord);
// };

// const startGame = async () => {
//   console.clear();
//   await guess1();
//   await guess2();
//   await guess3();
// };

// startGame();
