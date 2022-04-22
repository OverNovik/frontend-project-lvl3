import renderFeeds from './components/feeds.js';
import renderPosts from './components/posts.js';

export default (i18n, form, input, feedbackArea) => {
  const btn = form.querySelector('btn-lg');
  const watched = (path, value) => {
    console.log('value', value);
    console.log('path', path);
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
    } else if (path === 'form.error') {
      feedbackArea.classList.remove('text-success');
      input.classList.add('is-invalid');
      feedbackArea.classList.add('text-danger');
      feedbackArea.textContent = value;
    } else if (path === 'form.stateForm' && value === 'load') {
      input.setAttribute('readonly', 'readonly');
      btn.setAttribute('disabled', true);
    } else if (path === 'form.stateForm' && value === 'success') {
      input.removeAttribute('readonly');
      btn.setAttribute('disabled', false);
    }

    form.parentNode.append(feedbackArea);
  };

  return watched;
};
