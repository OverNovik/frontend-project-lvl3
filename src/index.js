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
            parserError: 'Ресурс не содержит валидный RSS',
            networkError: 'Ошибка сети',
          },
        },
      },
    },
  });
  const form = document.querySelector('form');
  const input = form.querySelector('#url-input');
  const feedbackArea = document.querySelector('.feedback');

  const watchedState = onChange(state, view(i18nextInstance, form, input, feedbackArea));

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const urlData = formData.get('url');
    form.reset();

    yupValid(urlData, i18nextInstance, state)
      .then(() => {
        if (state.feeds.includes(urlData)) {
          throw new Error(i18nextInstance.t('feedback.repeat'));
        } else {
          state.requests.push(urlData);
          return getXml(watchedState, urlData, state, i18nextInstance);
        }
      })
      .then(() => {
        watchedState.form.stateForm = 'valid';
        watchedState.form.feedback = i18nextInstance.t('feedback.valid');
      })
      .catch((error) => {
        if (error.message === i18nextInstance.t('feedback.repeat')) {
          watchedState.form.stateForm = 'repeat';
          watchedState.form.feedback = i18nextInstance.t('feedback.repeat');
        } else if (error.message === i18nextInstance.t('feedback.networkError')) {
          watchedState.form.stateForm = 'networkError';
          watchedState.form.feedback = i18nextInstance.t('feedback.networkError');
        } else {
          watchedState.form.stateForm = 'invalid';
          watchedState.form.feedback = i18nextInstance.t('feedback.invalid');
          watchedState.form.error = error.message;
        }
      });
  });
};
export default app;
