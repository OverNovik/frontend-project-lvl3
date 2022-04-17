import renderFeeds from './components/feeds.js';
import renderPosts from './components/posts.js';

export default (i18n) => {
  const watched = (path, value) => {
    const form = document.querySelector('.rss-form');
    const input = form.querySelector('#url-input');
    const feedbackArea = document.querySelector('.feedback');

    if (path === 'feeds') {
      input.classList.remove('is-invalid');
      renderFeeds(value, i18n);
    } else if (path === 'posts') {
      input.classList.remove('is-invalid');
      renderPosts(value, i18n);
    } else {
      input.classList.add('is-invalid');
      feedbackArea.textContent = value;
    }

    form.parentNode.append(feedbackArea);
  };

  return watched;
};
