const calculate = (calculator, buttonName) => {
  const { total, next, operation } = calculator;
  if (buttonName === '+/-') {
    return {
      total: (total * -1),
      next: (next * -1),
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
