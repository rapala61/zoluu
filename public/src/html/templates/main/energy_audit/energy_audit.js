import Mustache from 'mustache';
import template from './energy_audit.html';

document.querySelector('#main-section')
  .innerHTML = Mustache.render(template);
