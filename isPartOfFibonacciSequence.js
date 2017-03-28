function isPartOfFibonacciSequence(input){

    var firstNumber = 1;
    var secondNumber = 1;

    while (input > secondNumber) {
      firstNumber = firstNumber + secondNumber;
      secondNumber = firstNumber + secondNumber;
    }

    return firstNumber == input || secondNumber == input ? true : false;
}
