export const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

// Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
export const getRandomIntInclusive = (min = 1, max = 100) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

export const getRandomExpression = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomIntInclusive(0, 2)];
  const operand1 = getRandomIntInclusive(1, 100);
  const operand2 = getRandomIntInclusive(1, 100);

  return `${operand1} ${operator} ${operand2}`;
};

export const calculateExpression = (expressionString) => {
  const [number1, operator, number2] = expressionString.split(' ');
  const operand1 = Number(number1);
  const operand2 = Number(number2);

  let result;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      break;
  }

  return String(result);
};
