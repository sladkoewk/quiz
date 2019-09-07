function buttonFabElement(typeIcon) {
  const buttonFab = document.createElement('button');
  buttonFab.className = 'mdl-button mdl-js-button mdl-button--fab mdl-button--colored';

  const icon = document.createElement('i');
  icon.className = 'material-icons';
  const textAddButton = document.createTextNode(typeIcon);
  icon.appendChild(textAddButton);

  buttonFab.appendChild(icon);
  return buttonFab;
}

export default buttonFabElement;
