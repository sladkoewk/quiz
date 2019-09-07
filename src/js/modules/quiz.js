import elementsFactory from './factories/elementsFactory';

const answers = [];
let container;
let questions;

function writeAnswer(answer, index) {
  if (answer) {
    answers.push(
      {
        index,
        answer,
      },
    );
  }
}

function respond(answerObject) {
  const { next, answer, index } = answerObject;
  writeAnswer(answer, index);
  nextQuestion(next);
}

function renderQuestion(question, index) {
  container.innerHTML = '';
  elementsFactory(question, container, respond, index);
}

function nextQuestion(number) {
  renderQuestion(questions[number], number);
}

function startQuiz(questionnaire, containerElement) {
  questions = questionnaire;
  container = containerElement;
  nextQuestion(0);
}

export default startQuiz;
