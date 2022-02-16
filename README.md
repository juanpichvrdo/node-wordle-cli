
# node-wordle-cli

A version of the game [Wordle](https://www.nytimes.com/games/wordle/index.html) in your terminal.


## Game

Players have six attempts to guess a five-letter word, everytime a guess is entered, it will be printed to the terminal with the color of the letters changing, indicating when letters match or occupy the correct position.

A collection of all letters of the (english) alphabet will be shown after each guess to help players keep track of the status of letters.   


![node-wordle-cli](https://user-images.githubusercontent.com/39318627/154184247-54c65250-3d33-44b8-b9e0-e3b33cd66a78.gif)


## How to run 

The quicket way to play is to download it with npx: 

```bash
  npx node-wordle-cli 
```

or 

install globally running:

```bash
  npm i -g node-wordle-cli
```

and then run with:

```bash
  node-wordle-cli
```

## Run Locally

Clone the project

```bash
  git clone git@github.com:juanpichvrdo/node-wordle-cli.git
```

Go to the project directory

```bash
  cd node-wordle-cli
```

Install dependencies

```bash
  npm install
```

Run and watch file changes with nodemon:

```bash
  npm run dev
```

Build:

```bash
  npm run build
```

Build and then run the builded files:

```bash
  npm run start
```

## Todo

- Add tests


## Credits

Wordle is a game created by Josh Wardle([@powerlanguish](https://twitter.com/powerlanguish)).


## License

[MIT](https://choosealicense.com/licenses/mit/)
