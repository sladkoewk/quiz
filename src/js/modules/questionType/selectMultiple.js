import buttonElement, { disableButtonElement, enableButtonElement } from '../elements/buttonElement';
import checkboxElement, { selectedOptions } from '../elements/checkboxElement';

function selectMultiple(question, index, container, respond) {
  const button = buttonElement('Далее', true);
  const checkboxesLength = question.answers.length;

  for (let i = 0; i < checkboxesLength; i++) {
    const { checkboxWrapper, checkboxItem } = checkboxElement(question.answers[i], i);

    checkboxItem.addEventListener('change', () => {
      const selected = selectedOptions(container);
      console.log(selected);
      if (selected.length > 0) {
        enableButtonElement(button);
      } else {
        disableButtonElement(button);
      }
    });

    container.append(checkboxWrapper);
  }

  function sendResult() {
    const answer = selectedOptions(container);
    respond({ next: question.next, answer, index });
  }

  button.addEventListener('click', sendResult);
  container.append(button);

  window.componentHandler.upgradeAllRegistered();
}

export default selectMultiple;
