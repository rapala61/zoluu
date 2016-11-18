function setClassForElement(selector, className, set = true) {
  const el = document.querySelector(selector);

  if (set) {
    if (!el.classList.contains(className)) {
      el.classList.add(className);
    }
  } else {
    el.classList.remove(className);
  }
}

module.exports = {
  setClassForElement
};
