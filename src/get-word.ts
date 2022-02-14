import { answers } from "./helpers/words";

export default function getWord() {
  return answers[Math.floor(Math.random() * answers.length)];
}
