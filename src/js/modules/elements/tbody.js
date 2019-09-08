import tr from './tr';

function tbody(quiz) {
  const tbodyElement = document.createElement('tbody');

  const nameTr = tr(['Имя', quiz.name]);
  const dateTr = tr(['Дата заполнения', new Date(quiz.date).toLocaleDateString('ru')]);

  tbodyElement.appendChild(nameTr);
  tbodyElement.appendChild(dateTr);

  const { answers } = quiz;
  for (const key in answers) {
    let trElement;
    if (answers[key].answerQuestion instanceof Array) {
      trElement = tr([answers[key].numberQuestion, answers[key].answerQuestion.join(', ')]);
    } else {
      trElement = tr([answers[key].numberQuestion, answers[key].answerQuestion]);
    }
    tbodyElement.appendChild(trElement);
  }
  return tbodyElement;
}

export default tbody;
