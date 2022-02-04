export enum LetterColor {
  Black = "black",
  Yellow = "yellow",
  Green = "green",
}

export interface LetterGuess {
  letter: string;
  color: LetterColor;
}
