function input(question, index, container, respond) {
  const wrapperInput = document.createElement('div');
  wrapperInput.className = 'input mdl-textfield mdl-js-textfield';

  const inputField = document.createElement('input');
  inputField.className = 'mdl-textfield__input';
  inputField.id = 'input';
  inputField.setAttribute('type', 'text');

  const label = document.createElement('label');
  label.className = 'mdl-textfield__label';
  inputField.setAttribute('for', 'input');

  wrapperInput.appendChild(inputField);
  wrapperInput.appendChild(label);

  const button = document.createElement('button');
  const textButton = document.createTextNode('Далее');
  button.appendChild(textButton);
  button.className = 'button mdl-button mdl-js-button mdl-button--raised';
  button.setAttribute('disabled', 'disabled');

  container.append(wrapperInput);
  container.append(button);

  function sendResult() {
    respond({ answer: inputField.value, next: question.next, index });
  }

  button.addEventListener('click', sendResult);

  inputField.addEventListener('input', () => {
    if (inputField.value.length >= question.minLength) {
      button.className = 'button mdl-button mdl-js-button mdl-button--raised mdl-button--colored';
      button.removeAttribute('disabled');
    } else {
      button.className = 'button mdl-button mdl-js-button mdl-button--raised';
      button.setAttribute('disabled', 'disabled');
    }
  });

  window.componentHandler.upgradeAllRegistered();
}

export default input;
