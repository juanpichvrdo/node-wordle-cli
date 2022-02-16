import chalk from "chalk";

const { whiteBright, cyan, green, yellow, gray } = chalk;

export default function showInstructions(): string {
  return `
    ${whiteBright(`Wordle.`)}
    ${cyan(`
    Guess the word in six tries.
    Each guess must be a valid five-letter word.
    After each guess, the color of the word will 
    change to show how close your guess was to the word.

    ----------------------------------------------------`)}
    ${whiteBright(`
    Examples
    
    ${green("W")} E A R Y -> ${cyan('"W" is in the word and in the correct spot.')}
    P ${yellow("I")} L L S -> ${cyan('"I" is in the word but in the wrong spot.')}
    V A G ${gray(`U`)} E -> ${cyan('"U" is not in the word in any spot.')}
    `)}
  `;
}
