let userInput: unknown;
let userName: string;

userInput = 6;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { mesage: message, errorCode: code };
}

generateError("An error occurred!", 500);
