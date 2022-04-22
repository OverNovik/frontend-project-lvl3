import axios from 'axios';
import getLink from './getLink.js';
import parser from './parser.js';
import updateTracking from './updateTracking.js';

const getXml = (watchedState, url, state, i18n) => {
  axios.get(getLink(url))
    .then((response) => {
      const parseData = parser(response.data, i18n, watchedState);
      updateTracking(state, watchedState, parseData);
      setTimeout(() => {
        getXml(watchedState, url, state, i18n);
      }, 5000);
      watchedState.form.status = 'success';
    })
    .catch((error) => {
      if (error.message === 'Network Error') {
        watchedState.form.error = i18n.t('feedback.networkError');
      }
      watchedState.form.error = error.message;
      watchedState.form.status = 'success';
    });
};

export default getXml;
