import readlineSync from 'readline-sync';
import { getRandomIntInclusive, isEven } from './lib.js';

const game = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const questionsCount = 3;
  for (let i = 0; i < questionsCount; i += 1) {
    const questionNumber = getRandomIntInclusive(1, 100);
    const answer = isEven(questionNumber);
    console.log(`Question: ${questionNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default game;
