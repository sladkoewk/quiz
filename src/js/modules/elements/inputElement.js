function inputElement() {
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

  return { wrapperInput, inputField };
}

export default inputElement;
