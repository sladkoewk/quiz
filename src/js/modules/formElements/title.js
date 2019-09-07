function title(text, container) {
  const titleElement = document.createElement('h4');
  titleElement.innerHTML = text;
  container.appendChild(titleElement);
}

export default title;
