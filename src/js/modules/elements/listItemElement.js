function listItemElement(text, cb) {
  const item = document.createElement('div');
  item.className = 'list-item mdl-list__item';

  const title = document.createElement('span');
  title.className = 'mdl-list__item-primary-content';
  const textTitle = document.createTextNode(text);
  title.appendChild(textTitle);

  const action = document.createElement('a');
  action.className = 'mdl-list__item-secondary-action';
  action.setAttribute('href', '#');

  const icon = document.createElement('i');
  icon.className = 'material-icons';
  const iconType = document.createTextNode('delete');
  icon.appendChild(iconType);

  action.appendChild(icon);

  item.appendChild(title);
  item.appendChild(action);

  action.addEventListener('click', (e) => {
    e.preventDefault();
    cb(text);
  });

  return item;
}

export default listItemElement;
