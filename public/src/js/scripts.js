// Import templates
// import Header from '../html/templates/header/header';
// import Footer from '../html/templates/footer/footer';

// Import JS helpers
import { setClassForElement } from './helpers';

// Import styles
require('../css/fonts.scss');
require('../css/styles.scss');

// // render templates
// const header = new Header();
// const footer = new Footer();
// header.render();
// footer.render();


// make header visible when scrolling past 5px
window.addEventListener('scroll', (e) => {
  if (document.body.scrollTop > 5) {
    setClassForElement('header', 'visible');
  } else {
    setClassForElement('header', 'visible', false);
  }
});
