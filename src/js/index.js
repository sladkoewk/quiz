import './vendor/material.min';

import questionnaire from './modules/questionnaire';
import startQuiz from './modules/quiz';

const container = document.getElementsByClassName('quiz__item-js')[0];
startQuiz(questionnaire, container);
