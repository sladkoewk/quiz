import './vendor/polyfill';
import './vendor/appendPolyfill';
import './vendor/material.min';

import questionnaireModel from './modules/models/questionnaireModel';
import startQuiz from './modules/controllers/quizController';

const container = document.getElementsByClassName('quiz__item-js')[0];
startQuiz(questionnaireModel, container);
