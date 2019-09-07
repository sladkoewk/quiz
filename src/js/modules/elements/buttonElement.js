function buttonElement(text, isDisable) {
  const button = document.createElement('button');
  const textButton = document.createTextNode(text);
  button.appendChild(textButton);
  button.className = 'button mdl-button mdl-js-button mdl-button--raised mdl-button--colored';
  if (isDisable) {
    disableButtonElement(button);
  }
  return button;
}

export function disableButtonElement(button) {
  button.className = 'button mdl-button mdl-js-button mdl-button--raised';
  button.setAttribute('disabled', 'disabled');
}

export function enableButtonElement(button) {
  button.className = 'button mdl-button mdl-js-button mdl-button--raised mdl-button--colored';
  button.removeAttribute('disabled');
}

export default buttonElement;
