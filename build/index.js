#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const get_word_1 = __importDefault(require("./get-word"));
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
    // console.log(solutionWord);
    console.log(answer.join(""));
};
let solutionWord = (0, get_word_1.default)();
const guess1 = () => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield inquirer_1.default.prompt({
        name: "guess_1",
        type: "input",
    });
    return wordleGuess(answer.guess_1, solutionWord);
});
const guess2 = () => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield inquirer_1.default.prompt({
        name: "guess_2",
        type: "input",
    });
    return wordleGuess(answer.guess_2, solutionWord);
});
const guess3 = () => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield inquirer_1.default.prompt({
        name: "guess_3",
        type: "input",
    });
    return wordleGuess(answer.guess_3, solutionWord);
});
const startGame = () => __awaiter(void 0, void 0, void 0, function* () {
    console.clear();
    yield guess1();
    yield guess2();
    yield guess3();
});
startGame();
