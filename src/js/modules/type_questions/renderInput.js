function renderInput(question, container, respond) {
  const wrapperInput = document.createElement('div');
  wrapperInput.className = 'input mdl-textfield mdl-js-textfield';

  const input = document.createElement('input');
  input.className = 'mdl-textfield__input';
  input.id = 'input';
  input.setAttribute('type', 'text');

  const label = document.createElement('label');
  label.className = 'mdl-textfield__label';
  input.setAttribute('for', 'input');

  wrapperInput.appendChild(input);
  wrapperInput.appendChild(label);

  const button = document.createElement('button');
  const textButton = document.createTextNode('Далее');
  button.appendChild(textButton);
  button.className = 'button mdl-button mdl-js-button mdl-button--raised';
  button.setAttribute('disabled', 'disabled');

  container.append(wrapperInput);
  container.append(button);

  function sendResult() {
    respond({ answer: input.value, next: question.next });
  }

  button.addEventListener('click', sendResult);

  input.addEventListener('input', () => {
    if (input.value.length >= question.minLength) {
      button.className = 'button mdl-button mdl-js-button mdl-button--raised mdl-button--colored';
      button.removeAttribute('disabled');
    } else {
      button.className = 'button mdl-button mdl-js-button mdl-button--raised';
      button.setAttribute('disabled', 'disabled');
    }
  });
}

export default renderInput;
