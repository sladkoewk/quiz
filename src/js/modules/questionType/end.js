import buttonElement from '../elements/buttonElement';

function end(question, index, container, respond) {
  const button = buttonElement(question.textButton, false);

  container.append(button);

  button.addEventListener('click', () => {
    respond({ answer: new Date(), next: question.next, index });
  });
}

export default end;
