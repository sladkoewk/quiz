function textareaElement() {
  const wrapperInput = document.createElement('div');
  wrapperInput.className = 'input mdl-textfield mdl-js-textfield';

  const textareaField = document.createElement('textarea');
  textareaField.className = 'textarea mdl-textfield__input';
  textareaField.id = 'input';
  textareaField.setAttribute('type', 'text');

  const label = document.createElement('label');
  label.className = 'mdl-textfield__label';
  textareaField.setAttribute('for', 'input');

  wrapperInput.appendChild(textareaField);
  wrapperInput.appendChild(label);

  return { wrapperInput, textareaField };
}

export default textareaElement;
