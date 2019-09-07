import flatpickr from '../../vendor/flatpickr';

import buttonElement, { enableButtonElement } from '../elements/buttonElement';

function date(question, index, container, respond) {
  let selectDate;

  const flatpickrContainer = document.createElement('input');
  flatpickrContainer.className = 'flatpickr flatpickr-input';
  flatpickrContainer.setAttribute('type', 'text');
  flatpickrContainer.setAttribute('placeholder', 'Выберите дату');
  flatpickrContainer.setAttribute('readonly', 'readonly');

  const buttonNext = buttonElement('Далее', true);

  flatpickr(flatpickrContainer, {
    dateFormat: 'd.m.Y',
    maxDate: (new Date()).toLocaleDateString('ru'),
    onChange(selectedDates, dateStr) {
      enableButtonElement(buttonNext);
      selectDate = dateStr;
    },
  });

  buttonNext.addEventListener('click', () => {
    respond({ answer: selectDate, next: question.next, index });
  });

  container.append(flatpickrContainer);
  container.append(buttonNext);
}

export default date;
