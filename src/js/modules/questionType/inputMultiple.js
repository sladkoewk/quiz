import inputElement from '../elements/inputElement';
import buttonFabElement from '../elements/buttonFabElement';
import buttonElement from '../elements/buttonElement';

function inputMultiple(question, index, container, respond) {
  const { wrapperInput, inputField } = inputElement();
  const buttonAdd = buttonFabElement('add');
  const buttonNext = buttonElement('Далее', true);

  container.append(wrapperInput);
  container.append(buttonAdd);
  container.append(buttonNext);

  window.componentHandler.upgradeAllRegistered();
}

export default inputMultiple;
