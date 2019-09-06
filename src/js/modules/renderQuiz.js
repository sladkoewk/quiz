import renderStart from './type_questions/renderStart';
import renderInput from './type_questions/renderInput';
import renderInputMultiple from './type_questions/renderInputMultiple';
import renderRadio from './type_questions/renderRadio';
import renderSelectMultiple from './type_questions/renderSelectMultiple';
import renderTextarea from './type_questions/renderTextarea';
import renderDate from './type_questions/renderDate';
import renderEnd from './type_questions/renderEnd';

const answers = [];
const container = document.getElementsByClassName('quiz__item-js')[0];

let questions;
let currentQuestion = 1;

function renderTitle(text) {
  const titleElement = document.createElement('h4');
  titleElement.innerHTML = text;
  return titleElement;
}

function respond(answerObject) {
  const { next, answer } = answerObject;

  if (answer) {
    answers.push(
      {
        numberOfQuestion: currentQuestion,
        answer,
      },
    );
  }
  currentQuestion = next;
  nextQuestion();
}

function renderQuestion(question) {
  console.log(currentQuestion);
  console.log(answers);
  const { type } = question;

  container.innerHTML = '';
  container.append(renderTitle(question.text));

  switch (type) {
    case 'start':
      renderStart(question, container, respond);
      break;
    case 'input':
      renderInput(question, container, respond);
      break;
    case 'radio':
      renderRadio(question, container, respond);
      break;
    case 'select-multiple':
      renderSelectMultiple(question, container, respond);
      break;
    case 'input-multiple':
      renderInputMultiple(question, container, respond);
      break;
    case 'date':
      renderDate(question, container, respond);
      break;
    case 'textarea':
      renderTextarea(question, container, respond);
      break;
    case 'end':
      renderEnd(question, container, respond);
      break;
    default:
      console.log('Not defined type question');
  }
}

function nextQuestion() {
  renderQuestion(questions[currentQuestion]);
}

function startQuiz(questionnaire) {
  questions = questionnaire;
  nextQuestion();
}

export default startQuiz;
