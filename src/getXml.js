import axios from 'axios';
import parser from './parser.js';
import updateTracking from './updateTracking.js';

const getLink = (url) => `https://allorigins.hexlet.app/get?url=${url}`;

const getXml = (watchedState, url, state) => {
  axios.get(getLink(url))
    .then((response) => response.data)
    .then((data) => {
      const parseData = parser(data);
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
