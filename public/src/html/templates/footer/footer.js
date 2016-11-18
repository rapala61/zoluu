import Mustache from 'mustache';
import template from './footer.html';

document.querySelector('#footer-section')
  .innerHTML = Mustache.render(template);
