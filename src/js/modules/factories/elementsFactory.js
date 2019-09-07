import title from '../questionType/title';
import start from '../questionType/start';
import input from '../questionType/input';
import inputMultiple from '../questionType/inputMultiple';
import radio from '../questionType/radio';
import selectMultiple from '../questionType/selectMultiple';
import textarea from '../questionType/textarea';
import date from '../questionType/date';
import end from '../questionType/end';

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
};

function elementsFactory(question, index, container, respond) {
  title(question.text, container);
  ELEMENTS[question.type](question, index, container, respond);
}

export default elementsFactory;
