#!/usr/bin/env node
import fs from "fs";
import path from "path";

const getWord = (): string => {
  const wordsPath = path.resolve("src/dict.txt");

  try {
    const data = fs.readFileSync(wordsPath, "utf8");
    const wordsArray = data.toString().split("\n");
    const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    return randomWord;
  } catch (e) {
    // if error getting word make player guess the word 'error'
    return "error";
  }
};

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

  console.log(solutionWord);
  console.log(answer.join(""));
};

let solutionWord = getWord();

wordleGuess("annal", solutionWord);
