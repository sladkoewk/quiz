import elementsFactory from './factories/elementsFactory';

const answers = [];
const container = document.getElementsByClassName('quiz__item-js')[0];
let questions;

function respond(answerObject) {
  const { next, answer, index } = answerObject;

  if (answer) {
    answers.push(
      {
        index,
        answer,
      },
    );
  }

  nextQuestion(next);
}

function renderQuestion(question, index) {
  console.log(answers);
  container.innerHTML = '';
  elementsFactory(question, container, respond, index);
}

function nextQuestion(number) {
  renderQuestion(questions[number], number);
}

function startQuiz(questionnaire) {
  questions = questionnaire;
  nextQuestion(0);
}

export default startQuiz;
