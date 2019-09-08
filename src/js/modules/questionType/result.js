import buttonElement from '../elements/buttonElement';
import table from '../elements/table';
import thead from '../elements/thead';
import tbody from '../elements/tbody';

function result(question, index, container, respond, logAnswers) {
  const startButton = buttonElement(question.textButton, false);
  const tableResult = table();
  tableResult.className = 'mdl-data-table mdl-js-data-table mdl-shadow--2dp';
  const theadResult = thead(['Поле', 'Значение']);
  tableResult.append(theadResult);
  container.append(startButton, tableResult);

  for (const quiz of logAnswers) {
    const tbodyResult = tbody(quiz);
    tableResult.append(tbodyResult);
  }

  function sendResult() {
    respond({ next: question.next, index });
  }

  startButton.addEventListener('click', sendResult);

  window.componentHandler.upgradeAllRegistered();
}

export default result;
