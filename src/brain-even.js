import readlineSync from 'readline-sync';
import _ from 'lodash';

export default () => {
  const numberOfSteps = 3;
  const maxNumber = 100;

  // Greeting
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // Game
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < numberOfSteps; i += 1) {
    const number = _.random(maxNumber);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
