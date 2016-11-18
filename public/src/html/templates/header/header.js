import Mustache from 'mustache';
import template from './header.html';

document.querySelector('#header-section')
  .innerHTML = Mustache.render(template);
