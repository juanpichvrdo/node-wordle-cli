export default function validateInput(input: string): boolean {
  if (input.trim() === "") {
    console.log("Need to enter a word");
    return false;
  }

  if (input.trim().length !== 5) {
    console.log("Word must be 5 letters");
    return false;
  }

  // TODO: Check if word is a valid english word

  return true;
}
