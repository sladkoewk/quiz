import title from '../formElements/title';
import start from '../formElements/start';
import input from '../formElements/input';
import inputMultiple from '../formElements/inputMultiple';
import radio from '../formElements/radio';
import selectMultiple from '../formElements/selectMultiple';
import textarea from '../formElements/textarea';
import date from '../formElements/date';
import end from '../formElements/end';

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
