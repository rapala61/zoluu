import Mustache from 'mustache';
import template from './energy_audit.html';

import styles from './energy_audit.scss';

const data = {
  styles
};

document.querySelector('#main-section')
  .innerHTML = Mustache.render(template, data);
