function buttonFabElement(typeIcon, isDisable) {
  const buttonFab = document.createElement('button');
  buttonFab.className = 'mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored';
  const icon = document.createElement('i');
  icon.className = 'material-icons';
  icon.textContent = typeIcon;
  buttonFab.append(icon);

  if (isDisable) {
    disableButtonFabElement(buttonFab);
  }

  return buttonFab;
}

export function disableButtonFabElement(buttonFab) {
  buttonFab.className = 'mdl-button mdl-js-button mdl-button--fab';
  buttonFab.setAttribute('disabled', 'disabled');
}

export function enableButtonFabElement(buttonFab) {
  buttonFab.className = 'mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored';
  buttonFab.removeAttribute('disabled');
}

export default buttonFabElement;
