function checkboxElement(text, index) {
  const label = document.createElement('label');
  label.className = 'checkbox mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect';
  label.setAttribute('for', `checkbox-${index}`);

  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.id = `checkbox-${index}`;
  input.className = 'mdl-checkbox__input';
  input.value = text;

  const span = document.createElement('span');
  span.className = 'mdl-checkbox__label';
  span.innerHTML = text;

  label.appendChild(input);
  label.appendChild(span);

  return { checkboxWrapper: label, checkboxItem: input };
}

export function selectedOptions(container) {
  const selectedElements = container.querySelectorAll('input[type="checkbox"]:checked');
  const answers = [];
  for (const element of selectedElements) {
    answers.push(element.value);
  }
  return answers;
}

export default checkboxElement;
