import onChange from 'on-change';
import i18next from 'i18next';
import yupValid from './yupValid.js';
import view from './view.js';

const app = () => {
  const state = {
    form: {
      stateForm: '',
      error: '',
      feedback: [],
    },
    feeds: [],
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
            inValid: 'Ссылка должна быть валидным URL',
            repeat: 'RSS уже существует',
          },
        },
      },
    },
  });

  const form = document.querySelector('.rss-form');

  const watchedState = onChange(state, view());

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const urlData = formData.get('url');

    yupValid(urlData, i18nextInstance).then(() => {
      if (state.feeds.includes(urlData)) {
        watchedState.form.stateForm = 'invalid';
        watchedState.form.feedback = i18nextInstance.t('repeat');
      } else {
        state.feeds.push(urlData);
        watchedState.form.stateForm = 'valid';
        watchedState.form.feedback = i18nextInstance.t('valid');
      }
    }).catch(() => {
      watchedState.form.stateForm = 'invalid';
      watchedState.form.feedback = i18nextInstance.t('inValid');
    });
  });
};

export default app;
