import Mustache from 'mustache';
import template from './about.html';

document.querySelector('#main-section')
  .innerHTML = Mustache.render(template);
