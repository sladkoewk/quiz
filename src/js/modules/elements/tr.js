function tr(cells) {
  const trElement = document.createElement('tr');

  const cellsLength = cells.length;

  for (let i = 0; i < cellsLength; i++) {
    const td = document.createElement('td');
    td.className = 'mdl-data-table__cell--non-numeric';
    const textTd = document.createTextNode(cells[i]);
    td.appendChild(textTd);
    trElement.appendChild(td);
  }

  return trElement;
}

export default tr;
