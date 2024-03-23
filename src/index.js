import readlineSync from 'readline-sync';

const game = (taskText, questionGenerator, answerGenerator) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(taskText);

  const questionsCount = 3;
  for (let i = 0; i < questionsCount; i += 1) {
    const question = questionGenerator();
    const answer = answerGenerator(question);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default game;
