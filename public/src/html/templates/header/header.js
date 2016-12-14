import Mustache from 'mustache';
import template from './header.html';

import styles from './header.scss';

// Import JS helpers
import { setClassForElement } from '../../../js/helpers';

// name of the class for the fixed feature
// const fixedClassName = 'fixed';
const header = document.querySelector('#header-section');

const data = {
  styles
};

// render template
header.innerHTML = Mustache.render(template, data);

const className = header.querySelector('header').getAttribute('data-visible-class');
// Only if the header has class of fixed
// if (header.classList.contains(fixedClassName)) {
  // make header visible when scrolling past 5px
  window.addEventListener('scroll', (e) => {
    if (document.body.scrollTop > 5) {
      setClassForElement('header', className);
    } else {
      setClassForElement('header', className, false);
    }
  });
// }
