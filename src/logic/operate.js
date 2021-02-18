import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const number1 = Big(numberOne);
  const number2 = Big(numberTwo);
  let result = Big(0);
  switch (operation) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case 'x':
      result = number1 * number2;
      break;
    case '÷':
      result = number1 / number2;
      break;
    case '%':
      result = number1 + 0.01;
      break;
    default:
      result = 0;
  }
  return result;
};

export default operate;
