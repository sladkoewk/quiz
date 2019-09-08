import buttonElement from '../elements/buttonElement';

function end(question, index, container, respond) {
  console.log(question.button1.text);
  const button1 = buttonElement(question.button1.text, false);
  const button2 = buttonElement(question.button2.text, false);

  container.append(button1);
  container.append(button2);

  button1.addEventListener('click', () => {
    respond({ next: question.button1.next, index });
  });

  button2.addEventListener('click', () => {
    respond({ next: question.button2.next, index });
  });

  window.componentHandler.upgradeAllRegistered();
}

export default end;
