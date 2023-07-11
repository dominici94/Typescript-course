function addFunc(n1: number, n2: number, showResult: boolean, phrase: string) {
  // console.log(typeof number1);
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 2.8;
let printResultTry = true;
const resultPhrase = "Result is: ";

addFunc(number1, number2, printResultTry, resultPhrase);
