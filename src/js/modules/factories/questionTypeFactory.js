import title from '../questionType/title';
import start from '../questionType/start';
import input from '../questionType/input';
import inputMultiple from '../questionType/inputMultiple';
import radio from '../questionType/radio';
import selectMultiple from '../questionType/selectMultiple';
import textarea from '../questionType/textarea';
import date from '../questionType/date';
import end from '../questionType/end';
import result from '../questionType/result';

const ELEMENTS = {
  title,
  start,
  input,
  inputMultiple,
  radio,
  selectMultiple,
  textarea,
  date,
  end,
  result,
};

function questionTypeFactory(question, index, container, respond, logAnswers) {
  title(question.text, container);
  if (ELEMENTS[question.type] === result) {
    ELEMENTS[question.type](question, index, container, respond, logAnswers);
  } else {
    ELEMENTS[question.type](question, index, container, respond);
  }
}

export default questionTypeFactory;
