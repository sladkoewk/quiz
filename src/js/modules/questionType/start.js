import buttonElement from '../elements/buttonElement';

function start(question, index, container, respond) {
  const startButton = buttonElement(question.textButton, false);

  container.append(startButton);

  startButton.addEventListener('click', () => {
    respond({ next: question.next, index });
  });
}

export default start;
