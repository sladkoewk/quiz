import elementsFactory from './factories/elementsFactory';

const answers = [];
let resultQuiz = {};
let container;
let questions;

function writeAnswer(answer, index) {
  if (index === 0) {
    resultQuiz.answers = [];
  } else if (index === 1) {
    resultQuiz.name = answer;
  } else if (index === 8) {
    resultQuiz.date = answer;
    answers.push(resultQuiz);
    resultQuiz = {};
  } else if (answer) {
    resultQuiz.answers.push(
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
  elementsFactory(question, index, container, respond);
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
