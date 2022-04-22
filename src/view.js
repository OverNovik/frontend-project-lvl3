import renderFeeds from './components/feeds.js';
import renderPosts from './components/posts.js';

export default (i18n, form, input, feedbackArea) => {
  const btn = document.querySelector('.btn-lg');
  const watched = (path, value) => {
    console.log('value', value);
    console.log('path', path);
    if (path === 'feeds') {
      input.classList.remove('is-invalid');
      feedbackArea.classList.remove('text-danger');
      feedbackArea.classList.add('text-success');
      feedbackArea.textContent = i18n.t('feedback.valid');
      renderFeeds(value, i18n);
    } else if (path === 'posts') {
      renderPosts(value, i18n);
    } else if (value === 'repeat') {
      feedbackArea.classList.remove('text-success');
      input.classList.add('is-invalid');
      feedbackArea.classList.add('text-danger');
      feedbackArea.textContent = i18n.t('feedback.repeat');
    } else if (value === 'parserError') {
      feedbackArea.classList.remove('text-success');
      input.classList.add('is-invalid');
      feedbackArea.classList.add('text-danger');
      feedbackArea.textContent = i18n.t('feedback.parserError');
    } else if (value === 'Ошибка сети') {
      feedbackArea.classList.remove('text-success');
      input.classList.add('is-invalid');
      feedbackArea.classList.add('text-danger');
      feedbackArea.textContent = i18n.t('feedback.networkError');
    } else if (path === 'form.status') {
      if (value === 'load') {
        input.setAttribute('readonly', 'readonly');
        btn.setAttribute('disabled', true);
      }
      if (value === 'success') {
        input.removeAttribute('readonly');
        btn.removeAttribute('disabled');
      }
    } else if (path === 'form.error') {
      feedbackArea.classList.remove('text-success');
      input.classList.add('is-invalid');
      feedbackArea.classList.add('text-danger');
      feedbackArea.textContent = value;
    }

    form.parentNode.append(feedbackArea);
  };

  return watched;
};
