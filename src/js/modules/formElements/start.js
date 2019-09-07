function start(question, index, container, respond) {
  const startButton = document.createElement('button');
  const textButton = document.createTextNode(question.textButton);
  startButton.appendChild(textButton);
  startButton.className = 'button mdl-button mdl-js-button mdl-button--raised mdl-button--colored';
  container.append(startButton);
  startButton.addEventListener('click', () => {
    respond({ next: question.next, index });
  });
}

export default start;
