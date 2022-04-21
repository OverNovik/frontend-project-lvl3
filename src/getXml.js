import axios from 'axios';
import getLink from './getLink.js';
import parser from './parser.js';
import updateTracking from './updateTracking.js';

const getXml = (watchedState, url, state, i18n) => {
  axios.get(getLink(url))
    .then((response) => response.data)
    .then((data) => {
      const parseData = parser(data, i18n);
      updateTracking(state, watchedState, parseData);
    })
    .then(() => setTimeout(() => {
      getXml(watchedState, url, state);
    }, 5000))
    .catch((error) => {
      watchedState.form.error = error.message;
    });
};

export default getXml;
