import axios from 'axios';
import getLink from './getLink.js';
import parser from './parser.js';
import updateTracking from './updateTracking.js';

const getXml = (watchedState, url, state, i18n) => {
  axios.get(getLink(url))
    .then((response) => {
      const parseData = parser(response.data, i18n);
      updateTracking(state, watchedState, parseData);
      setTimeout(() => {
        getXml(watchedState, url, state, i18n);
      }, 5000);
    })
    .catch((error) => {
      if (error.message === 'Network Error') {
        watchedState.form.feedback = i18n.t('feedback.networkError');
      } else {
        watchedState.form.feedback = error.message;
      }
    });
};

export default getXml;
