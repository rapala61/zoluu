// Import styles
import { setClassForElement } from './helpers';

require('../css/fonts.scss');
require('../css/styles.scss');

// make header visible when scrolling past 5px
window.addEventListener('scroll', (e) => {
  if (document.body.scrollTop > 5) {
    setClassForElement('header', 'visible');
  } else {
    setClassForElement('header', 'visible', false);
  }
});
