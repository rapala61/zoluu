import Mustache from 'mustache';
import template from './home.html';

document.querySelector('#main-section')
  .innerHTML = Mustache.render(template);
