export enum LetterColor {
  Gray = "gray",
  Yellow = "yellow",
  Green = "green",
  White = "white",
}

export interface LetterGuess {
  letter: string;
  color: LetterColor;
}
