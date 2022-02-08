import fs from "fs";
import path from "path";

export default function getWord(): string {
  // TODO: get new words dict
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
}
