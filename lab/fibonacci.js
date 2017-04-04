function fibonacci(number){
  console.log("Number input is: " + number);

  var firstNumber = 1;
  var secondNumber = 1;
  var sequence = [];
  sequence.push(firstNumber);
  sequence.push(secondNumber);

  while (number > secondNumber) {
    sequence.push(firstNumber + secondNumber);
    firstNumber = firstNumber + secondNumber;
    secondNumber = firstNumber + secondNumber;
  }
  console.log(number);
  return firstNumber == number ? true : false;
}

console.log(fibonacci(34));
