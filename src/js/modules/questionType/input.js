import inputElement from '../elements/inputElement';
import buttonElement, { disableButtonElement, enableButtonElement } from '../elements/buttonElement';

function input(question, index, container, respond) {
  const { wrapperInput, inputField } = inputElement();

  const button = buttonElement('Далее', true);
  container.append(wrapperInput, button);

  function sendResult() {
    respond({ answer: inputField.value, next: question.next, index });
  }

  button.addEventListener('click', sendResult);

  inputField.addEventListener('input', () => {
    if (inputField.value.length >= question.minLength) {
      enableButtonElement(button);
    } else {
      disableButtonElement(button);
    }
  });

  window.componentHandler.upgradeAllRegistered();
}

export default input;
