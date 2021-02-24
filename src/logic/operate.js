import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const number1 = Big(numberOne);
  const number2 = Big(numberTwo);
  let result = Big(0);
  switch (operation) {
    case '+':
      result = number1.plus(number2).toString();
      break;
    case '-':
      result = number1.minus(number2).toString();
      break;
    case 'x':
      result = number1.times(number2).toString();
      break;
    case '÷':
      try {
        result = number1.div(number2).toString();
      } catch {
        result = 'Error';
      }
      break;
    default:
      result = 0;
  }
  return result;
};

export default operate;
