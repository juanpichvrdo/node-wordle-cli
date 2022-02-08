import chalk from "chalk";
import inquirer from "inquirer";
import { startGame } from "./index";

export default async function endgameFeedback(
  isGuessCorrect: boolean,
  solutionWord: string,
  guessNumber: number
) {
  if (isGuessCorrect) {
    // Won game
    console.log(`${chalk.reset(solutionWord)} was the correct word!`);
    const usePlural = guessNumber > 1;
    console.log(`Guessed in ${guessNumber} ${usePlural ? "tries." : "try!"}`);

    // TODO: ADD play again
    const shouldPlayAgain = await askPlayAgain();

    if (shouldPlayAgain) {
      await startGame();
    } else {
      console.log("bye!");
    }

    process.exit();
  } else if (guessNumber === 6) {
    console.log(`Sorry, the correct word was '${solutionWord}'`);

    const shouldPlayAgain = await askPlayAgain();

    if (shouldPlayAgain) {
      await startGame();
    } else {
      console.log("bye!");
    }

    process.exit();
  }
}

const askPlayAgain = async () => {
  const answer = await inquirer.prompt({
    name: `play_again`,
    type: "confirm",
    message: `Play again?`,
  });

  return answer.play_again;
};
