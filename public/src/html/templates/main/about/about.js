import Mustache from 'mustache';
import template from './about.html';

import styles from './about.scss';

const data = {
  styles
};

document.querySelector('#main-section')
  .innerHTML = Mustache.render(template, data);
