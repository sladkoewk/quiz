function listItemElement(text, cb) {
  const item = document.createElement('div');
  item.className = 'list-item mdl-list__item';

  const title = document.createElement('span');
  title.className = 'mdl-list__item-primary-content';
  title.textContent = text;

  const action = document.createElement('a');
  action.className = 'mdl-list__item-secondary-action';
  action.setAttribute('href', '#');

  const icon = document.createElement('i');
  icon.className = 'material-icons';
  icon.textContent = 'delete';

  action.append(icon);
  item.append(title, action);

  action.addEventListener('click', (e) => {
    e.preventDefault();
    cb(text);
  });

  return item;
}

export default listItemElement;
