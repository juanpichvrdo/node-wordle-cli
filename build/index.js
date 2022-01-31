#!/usr/bin/env node
"use strict";
//  "⬛" "🟨" "🟩"
const wordleGuess = (guessWord, solutionWord) => {
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
        }
    }
    console.log(answer);
};
let solutionWord = "perps";
wordleGuess("poppy", solutionWord);
// wordleGuess("lodge", solutionWord);
// wordleGuess("fudge", solutionWord);
