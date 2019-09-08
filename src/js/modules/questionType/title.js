function title(text, container) {
  const titleElement = document.createElement('h4');
  titleElement.innerHTML = text;
  container.append(titleElement);
}

export default title;
