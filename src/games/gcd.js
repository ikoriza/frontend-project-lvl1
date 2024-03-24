import getRandomIntInclusive from '../lib.js';
import app from '../index.js';

const TASK_TEXT = 'Find the greatest common divisor of given numbers.';

const getRandomPair = () => {
  const number1 = getRandomIntInclusive(1, 100);
  const number2 = getRandomIntInclusive(1, 100);

  return `${number1} ${number2}`;
};

const getGCD = (a, b) => ((b === 0) ? a : getGCD(b, a % b));

const getAnswer = (str) => {
  const [a, b] = str.split(' ');
  const answer = getGCD(a, b);
  return String(answer);
};

export default () => app(TASK_TEXT, getRandomPair, getAnswer);
