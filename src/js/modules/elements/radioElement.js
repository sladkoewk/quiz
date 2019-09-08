function radioElement(text, index) {
  const label = document.createElement('label');
  label.className = 'radio mdl-radio mdl-js-radio mdl-js-ripple-effect';
  label.setAttribute('for', `option-${index}`);

  const input = document.createElement('input');
  input.setAttribute('type', 'radio');
  input.id = `option-${index}`;
  input.className = 'mdl-radio__button';
  input.name = 'options';
  input.value = index;

  const span = document.createElement('span');
  span.className = 'mdl-radio__label';
  span.textContent = text;

  label.append(input, span);

  return { radioWrapper: label, radioItem: input };
}

export default radioElement;
