import buttonElement from '../elements/buttonElement';

function start(question, index, container, respond) {
  const startButton = buttonElement(question.textButton, false);

  container.append(startButton);

  function sendResult() {
    respond({ next: question.next, index });
  }

  startButton.addEventListener('click', sendResult);
}

export default start;
