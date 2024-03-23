import { getRandomExpression, calculateExpression } from '../lib.js';
import game from '../index.js';

export default () => {
  const taskText = 'What is the result of the expression?';
  game(taskText, getRandomExpression, calculateExpression);
};
