function renderRadio(question, container, respond) {
  const button = document.createElement('button');
  const textButton = document.createTextNode('Далее');
  button.appendChild(textButton);
  button.className = 'button mdl-button mdl-js-button mdl-button--raised';
  button.setAttribute('disabled', 'disabled');

  const radiosLength = question.answers.length;

  for (let i = 0; i < radiosLength; i++) {
    const label = document.createElement('label');
    label.className = 'radio mdl-radio mdl-js-radio mdl-js-ripple-effect';
    label.setAttribute('for', `option-${i}`);

    const input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.id = `option-${i}`;
    input.className = 'mdl-radio__button';
    input.name = 'options';
    input.value = i;

    const span = document.createElement('span');
    span.className = 'mdl-radio__label';
    span.innerHTML = question.answers[i].text;

    input.addEventListener('change', () => {
      button.removeAttribute('disabled');
      button.className = 'button mdl-button mdl-js-button mdl-button--raised mdl-button--colored';
    });

    label.appendChild(input);
    label.appendChild(span);
    container.append(label);
  }

  function sendResult() {
    const resultElement = container.querySelector('input[type="radio"]:checked');
    const answer = question.answers[resultElement.value].text;
    const { next } = question.answers[resultElement.value];
    respond({ answer, next });
  }

  button.addEventListener('click', sendResult);
  container.append(button);

  window.componentHandler.upgradeAllRegistered();
}

export default renderRadio;
