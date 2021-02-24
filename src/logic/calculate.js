import operate from './operate';

const calculate = (calculator, buttonName) => {
  const { total, next, operation } = calculator;
  const operator = ['+', '-', 'x', '÷', '%'].includes(buttonName);
  const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].includes(buttonName);
  const equals = buttonName === '=';

  if (total === 'Error') {
    if (buttonName === 'AC') {
      return { total: null, next: null, operation: null };
    }
    return { total, next: null, operation: null };
  }

  if (buttonName === 'AC') {
    return { total: null, next: null, operation: null };
  }

  if (buttonName === '+/-' && total && !next) {
    return { total: (total * -1), next, operation };
  }

  if (buttonName === '+/-' && next) {
    return { total, next: (next * -1), operation };
  }

  if (buttonName === '.' && !total) {
    return { total: '0.', next, operation };
  }

  if (buttonName === '.' && total && !next && !operation) {
    if (!total.includes('.')) {
      return { total: total + buttonName, next, operation };
    }
    return { total, next, operation };
  }

  if (buttonName === '.' && total && !next && operation) {
    return { total, next: '0.', operation };
  }

  if (buttonName === '.' && next) {
    if (!next.includes('.')) {
      return { total, next: next + buttonName, operation };
    }
    return { total, next, operation };
  }

  if (buttonName === '%' && total && !next && !operation) {
    return { total: (total * 0.01).toString(), next, operation };
  }

  if (buttonName === '%' && total && next && operation) {
    return { total, next: (next * 0.01).toString(), operation };
  }

  if (equals && total && next && operation) {
    return { total: operate(total, next, operation), next: null, operation: 'clear' };
  }

  if (number && operation === 'clear') {
    return { total: buttonName, next, operation: null };
  }
  if (number && !total && !next) {
    return { total: buttonName, next, operation };
  }

  if (number && total && !next && !operation) {
    return { total: total + buttonName, next, operation };
  }

  if (number && total && !next && operation) {
    return { total, next: buttonName, operation };
  }

  if (number && total && next && operation) {
    return { total, next: next + buttonName, operation };
  }

  if (operator && total && !next) {
    return { total, next, operation: buttonName };
  }

  if (operator && total && next && operation) {
    return {
      total: operate(total, next, operation),
      next: null,
      operation: buttonName,
    };
  }

  return {
    total,
    next,
    operation,
  };
};

export default calculate;
