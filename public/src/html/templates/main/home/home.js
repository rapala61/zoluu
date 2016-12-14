import Mustache from 'mustache';
import template from './home.html';

import styles from './home.scss';

const data = {
  styles
};

document.querySelector('#main-section')
  .innerHTML = Mustache.render(template, data);
