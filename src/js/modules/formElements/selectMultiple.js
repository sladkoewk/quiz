function selectMultiple(question, index, container, respond) {
  const button = document.createElement('button');
  const textButton = document.createTextNode('Далее');
  button.appendChild(textButton);
  button.className = 'button mdl-button mdl-js-button mdl-button--raised';
  button.setAttribute('disabled', 'disabled');

  const checkboxesLength = question.answers.length;

  function selectedOptions() {
    const selectedElements = container.querySelectorAll('input[type="checkbox"]:checked');
    const answers = [];
    for (const element of selectedElements) {
      answers.push(element.value);
    }
    return answers;
  }

  for (let i = 0; i < checkboxesLength; i++) {
    const label = document.createElement('label');
    label.className = 'checkbox mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect';
    label.setAttribute('for', `checkbox-${i}`);

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.id = `checkbox-${i}`;
    input.className = 'mdl-checkbox__input';
    input.value = question.answers[i];

    const span = document.createElement('span');
    span.className = 'mdl-checkbox__label';
    span.innerHTML = question.answers[i];

    input.addEventListener('change', () => {
      const selected = selectedOptions();
      if (selected.length > 0) {
        button.removeAttribute('disabled');
        button.className = 'button mdl-button mdl-js-button mdl-button--raised mdl-button--colored';
      } else {
        button.className = 'button mdl-button mdl-js-button mdl-button--raised';
        button.setAttribute('disabled', 'disabled');
      }
    });

    label.appendChild(input);
    label.appendChild(span);
    container.append(label);
  }

  function sendResult() {
    const answer = selectedOptions();
    respond({ next: question.next, answer, index });
  }

  button.addEventListener('click', sendResult);
  container.append(button);

  window.componentHandler.upgradeAllRegistered();
}

export default selectMultiple;
