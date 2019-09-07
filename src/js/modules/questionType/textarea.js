import textareaElement from '../elements/textareaElement';
import buttonElement from '../elements/buttonElement';

function textarea(question, index, container, respond) {
  const { wrapperInput, textareaField } = textareaElement();
  const button = buttonElement('Далее', false);

  container.append(wrapperInput);
  container.append(button);

  function sendResult() {
    respond({ answer: textareaField.value, next: question.next, index });
  }

  button.addEventListener('click', sendResult);

  window.componentHandler.upgradeAllRegistered();
}

export default textarea;
