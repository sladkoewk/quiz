function thead(columnNames) {
  const theadElement = document.createElement('thead');
  const tr = document.createElement('tr');

  const countCol = columnNames.length;

  for (let i = 0; i < countCol; i++) {
    const th = document.createElement('th');
    th.className = 'mdl-data-table__cell--non-numeric';
    const thText = document.createTextNode(columnNames[i]);
    th.appendChild(thText);
    tr.appendChild(th);
  }

  theadElement.appendChild(tr);
  return theadElement;
}

export default thead;
