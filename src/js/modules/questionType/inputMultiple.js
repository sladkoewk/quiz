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

  creatorItem.append(wrapperInput);
  creatorItem.append(buttonAdd);
  container.append(creatorItem);
  container.append(list);
  container.append(buttonNext);

  inputField.addEventListener('input', () => {
    if (inputField.value.length >= question.minLength) {
      enableButtonFabElement(buttonAdd);
    } else {
      disableButtonFabElement(buttonAdd);
    }
  });

  function action(text) {
    const removeIndex = answers.indexOf(text);
    answers.splice(removeIndex, 1);
    renderListItem();
  }

  function checkMinCountItem() {
    if (answers.length >= question.minLength) {
      enableButtonElement(buttonNext);
    } else {
      disableButtonElement(buttonNext);
    }
  }

  function renderListItem() {
    checkMinCountItem();
    list.innerHTML = '';
    for (const item of answers) {
      list.appendChild(listItemElement(item, action));
    }
  }

  function clearInput() {
    inputField.value = '';
  }

  function pushItem() {
    answers.push(inputField.value);
    clearInput();
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
