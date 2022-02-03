"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function getWord() {
    const wordsPath = path_1.default.resolve("src/dict.txt");
    try {
        const data = fs_1.default.readFileSync(wordsPath, "utf8");
        const wordsArray = data.toString().split("\n");
        const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
        return randomWord;
    }
    catch (e) {
        // if error getting word make player guess the word 'error'
        return "error";
    }
}
exports.default = getWord;
