import onChange from 'on-change';
import i18next from 'i18next';
import yupValid from './yupValid.js';
import view from './view.js';
import getXml from './getXml.js';

const app = () => {
  const state = {
    form: {
      stateForm: '',
      error: '',
      feedback: [],
    },
    feeds: [],
    requests: [],
    posts: [],
  };

  const i18nextInstance = i18next.createInstance();
  i18nextInstance.init({
    lng: 'ru',
    debug: true,
    resources: {
      ru: {
        translation: {
          feedback: {
            valid: 'RSS успешно загружен',
            invalid: 'Ссылка должна быть валидным URL',
            repeat: 'RSS уже существует',
          },
        },
      },
    },
  });

  const form = document.querySelector('.rss-form');

  const watchedState = onChange(state, view(i18nextInstance));

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const urlData = formData.get('url');
    form.reset();

    yupValid(urlData, i18nextInstance, state)
      .then(() => getXml(watchedState, urlData, state))
      .then(() => {
        if (state.feeds.includes(urlData)) {
          watchedState.form.stateForm = 'invalid';
          watchedState.form.feedback = i18nextInstance.t('feedback.repeat');
        } else {
          state.requests.push(urlData);
          watchedState.form.stateForm = 'valid';
          watchedState.form.feedback = i18nextInstance.t('feedback.valid');
        }
      })
      .catch((error) => {
        watchedState.form.stateForm = 'invalid';
        watchedState.form.feedback = i18nextInstance.t('feedback.invalid');
        watchedState.form.error = error.message;
      });
  });
};

export default app;
