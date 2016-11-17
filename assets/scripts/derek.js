const px = (num) => `${num}px`;

const padBodyWithSticky = (app) => {
  const stickies = document.querySelectorAll('.js-sticky');
  const height = Math.ceil(
    [...stickies]
    .reduce((acc, sticky) => acc + sticky.clientHeight, 0)
  );
  app.el.mainContainer.style.paddingBottom = px(height);
};

const fetchStory = (id) => {
  return fetch(`/stories/${id}`)
    .then(response => response.json())
    .then(json => {
      return json;
    });
};

const closeStory = (app) => (
  (e) => {
    if (app.el.storyContainerContent.contains(e.target)) return false;
    app.el.storyContainer.classList.add('display-none');
    document.removeEventListener('click', closeStory(app));
  }
);

const openStory = (app) => (
  (story) => {
    if (!story && !story.body) return false;
    app.el.storyContainerContent.innerHTML = story.body;
    app.el.storyContainer.classList.remove('display-none');
    document.addEventListener('click', closeStory(app));
  }
);

const watchStoryLinks = (app) => {
  const links = Array.from(document.querySelectorAll('.js-open-story'));
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const href = e.target.href;
      const id = href ? href.split('#').slice(-1)[0] : null;
      fetchStory(id).then(openStory(app));
    }, false);
  });
};

const createApp = function createApp() {
  const app = window.app || {};

  app.el = {};
  app.el.mainContainer = document.querySelector('.js-main-container');
  app.el.storyContainer = document.querySelector('.js-storyContainer');
  app.el.storyContainerContent = document.querySelector('.js-storyContainer-content');

  app.init = function init() {
    const body = document.querySelector('body');

    padBodyWithSticky(this);
    watchStoryLinks(this);
  };

  window.app = app;
  return app;
}

document.addEventListener('DOMContentLoaded', () => {
  createApp().init();
}, false);
