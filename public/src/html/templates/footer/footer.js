import Mustache from 'mustache';
import template from './footer.html';

import styles from './footer.scss';

const data = {
  styles
};

document.querySelector('#footer-section')
  .innerHTML = Mustache.render(template, data);
