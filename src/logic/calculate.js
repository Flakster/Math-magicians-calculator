import operate from './operate';

const calculate = (calculator, buttonName) => {
  const { total, next, operation } = calculator;
  const operators = ['+', '-', 'x', '÷', '%'];
  if (buttonName === '+/-') {
    return {
      total: (total * -1),
      next: (next * -1),
      operation,
    };
  }

  if (operators.includes(buttonName)) {
    return {
      total: operate(total, next, buttonName),
      next,
      operation,
    };
  }

  return {
    total,
    next,
    operation,
  };
};

export default calculate;
