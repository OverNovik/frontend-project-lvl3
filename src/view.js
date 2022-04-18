import renderFeeds from './components/feeds.js';
import renderPosts from './components/posts.js';

export default (i18n) => {
  const watched = (path, value) => {
    const form = document.querySelector('.rss-form');
    const input = form.querySelector('#url-input');
    const feedbackArea = document.querySelector('.feedback');

    if (path === 'feeds') {
      input.classList.remove('is-invalid');
      feedbackArea.classList.remove('text-danger');
      feedbackArea.classList.add('text-success');
      renderFeeds(value, i18n);
    } else if (path === 'posts') {
      input.classList.remove('is-invalid');
      feedbackArea.classList.remove('text-danger');
      feedbackArea.classList.add('text-success');
      renderPosts(value, i18n);
    } else {
      input.classList.add('is-invalid');
      feedbackArea.classList.remove('text-success');
      feedbackArea.classList.add('text-danger');
      feedbackArea.textContent = value;
    }

    form.parentNode.append(feedbackArea);
  };

  return watched;
};
