import buttonElement, { enableButtonElement } from '../elements/buttonElement';
import radioElement from '../elements/radioElement';

function radio(question, index, container, respond) {
  const button = buttonElement('Далее', true);

  const radiosLength = question.answers.length;

  for (let i = 0; i < radiosLength; i++) {
    const { radioWrapper, radioItem } = radioElement(question.answers[i].text, i);

    radioItem.addEventListener('change', () => {
      enableButtonElement(button);
    });

    container.append(radioWrapper);
  }

  function sendResult() {
    const resultElement = container.querySelector('input[type="radio"]:checked');
    const answer = question.answers[resultElement.value].text;
    const { next } = question.answers[resultElement.value];
    respond({ answer, next, index });
  }

  button.addEventListener('click', sendResult);
  container.append(button);

  window.componentHandler.upgradeAllRegistered();
}

export default radio;
