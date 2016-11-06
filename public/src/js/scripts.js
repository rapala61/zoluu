// Import styles
require('../css/fonts.scss');
require('../css/styles.scss');

function makeHeaderVisible(make) {
  if (make) {
    if (!document.querySelector('header').classList.contains('visible')) {
      document.querySelector('header').className += 'visible';
    }
  } else {
    document.querySelector('header').classList.remove('visible');
  }
}

// scroll
window.addEventListener('scroll', (e) => {
  if (document.body.scrollTop > 5) {
    makeHeaderVisible(true);
  } else {
    makeHeaderVisible(false);
  }
});
