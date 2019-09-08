import elementsFactory from '../factories/elementsFactory';

const logAnswers = [];
let resultQuiz = {};
let container;
let questions;

function writeAnswer(answerObject) {
  const { answer, index, date } = answerObject;
  if (index === 0) {
    resultQuiz = {};
    resultQuiz.answers = [];
  } if (index === 1) {
    resultQuiz.name = answer;
  } if (answer) {
    resultQuiz.answers.push(
      {
        numberQuestion: index,
        answerQuestion: answer,
      },
    );
  } if (date) {
    resultQuiz.date = date;
    logAnswers.unshift(resultQuiz);
  }
}

function respond(answerObject) {
  const { next } = answerObject;
  writeAnswer(answerObject);
  nextQuestion(next);
}

function renderQuestion(question, index) {
  container.innerHTML = '';
  elementsFactory(question, index, container, respond, logAnswers);
}

function nextQuestion(number) {
  renderQuestion(questions[number], number);
}

function startQuiz(questionnaireModel, containerElement) {
  questions = questionnaireModel;
  container = containerElement;
  nextQuestion(0);
}

export default startQuiz;
