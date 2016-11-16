const px = (num) => `${num}px`;

const padBodyWithSticky = (app) => {
  const stickies = document.querySelectorAll('.js-sticky');
  const height = Math.ceil(
    [...stickies]
    .reduce((acc, sticky) => acc + sticky.clientHeight, 0)
  );
  app.el.mainContainer.style.paddingBottom = px(height);
};

const createApp = function createApp() {
  const app = window.app || {};

  app.el = {};
  app.el.mainContainer = document.querySelector('.js-main-container');

  app.init = function init() {
    const body = document.querySelector('body');

    padBodyWithSticky(this);
  };

  window.app = app;
  return app;
}

document.addEventListener('DOMContentLoaded', () => {
  createApp().init();
}, false);
