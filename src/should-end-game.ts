import chalk from "chalk";
import inquirer from "inquirer";
import { NUMBER_OF_TRIES } from "./helpers/constants";
import { startGame } from "./index";

export default async function shouldEndGame(
  isGuessCorrect: boolean,
  solutionWord: string,
  guessNumber: number
) {
  const outOfGuesses = guessNumber === NUMBER_OF_TRIES;

  if (isGuessCorrect) {
    // Won game
    console.log(`${chalk.green(solutionWord)} was the correct word!`);
    const usePlural = guessNumber > 1;
    console.log(`Guessed in ${guessNumber} ${usePlural ? "tries." : "try!"}`);
  } else if (outOfGuesses) {
    console.log(`Sorry, the correct word was '${solutionWord}'`);
  }

  const gameOver = isGuessCorrect || outOfGuesses;

  if (gameOver) {
    const shouldPlayAgain = await askToPlayAgain();

    if (shouldPlayAgain) {
      await startGame();
    } else {
      console.log("bye!");
    }

    process.exit();
  }
}

const askToPlayAgain = async () => {
  const answer = await inquirer.prompt({
    name: `play_again`,
    type: "confirm",
    message: `Play again?`,
  });

  return answer.play_again;
};
