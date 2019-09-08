import inputElement from '../elements/inputElement';
import buttonFabElement, { disableButtonFabElement, enableButtonFabElement } from '../elements/buttonFabElement';
import buttonElement, { disableButtonElement, enableButtonElement } from '../elements/buttonElement';
import listElement from '../elements/listElement';
import listItemElement from '../elements/listItemElement';

function inputMultiple(question, index, container, respond) {
  const answers = [];

  const creatorItem = document.createElement('div');
  creatorItem.className = 'input__creator-item';
  const { wrapperInput, inputField } = inputElement();
  const buttonAdd = buttonFabElement('add', true);
  const buttonNext = buttonElement('Далее', true);
  const list = listElement();

  creatorItem.append(wrapperInput, buttonAdd);
  container.append(creatorItem, list, buttonNext);

  function setDisableAddbutton() {
    if (inputField.value.length >= question.minLength) {
      enableButtonFabElement(buttonAdd);
    } else {
      disableButtonFabElement(buttonAdd);
    }
  }

  inputField.addEventListener('input', () => setDisableAddbutton());

  function actionDelete(text) {
    const removeIndex = answers.indexOf(text);
    answers.splice(removeIndex, 1);
    renderListItem();
  }

  function checkMinCountItem() {
    if (answers.length >= question.minCount) {
      enableButtonElement(buttonNext);
    } else {
      disableButtonElement(buttonNext);
    }
  }

  function renderListItem() {
    checkMinCountItem();
    list.innerHTML = '';
    for (const item of answers) {
      list.append(listItemElement(item, actionDelete));
    }
  }

  function clearInput() {
    inputField.value = '';
  }

  function pushItem() {
    answers.push(inputField.value);
    clearInput();
    setDisableAddbutton();
    renderListItem();
  }

  buttonAdd.addEventListener('click', pushItem);

  function sendResult() {
    respond({ answer: answers, next: question.next, index });
  }

  buttonNext.addEventListener('click', sendResult);

  window.componentHandler.upgradeAllRegistered();
}

export default inputMultiple;
