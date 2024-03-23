import { getRandomIntInclusive, isEven } from '../lib.js';
import game from '../index.js';

export default () => {
  const taskText = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';
  game(taskText, getRandomIntInclusive, isEven);
};
