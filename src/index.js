import onChange from 'on-change';
import yupValid from './yupValid.js';
import view from './view.js';

const app = () => {
  const state = {
    form: {
      stateForm: '',
      error: '',
    },
    feeds: [],
  };

  const form = document.querySelector('.rss-form');

  const watchedState = onChange(state, view());

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const urlData = formData.get('url');

    yupValid(urlData).then(() => {
      if (state.feeds.includes(urlData)) {
        watchedState.form.stateForm = 'invalid';
      } else {
        state.feeds.push(urlData);
        watchedState.form.stateForm = 'valid';
      }
    }).catch(() => {
      watchedState.form.stateForm = 'invalid';
    });
  });
};

export default app;
