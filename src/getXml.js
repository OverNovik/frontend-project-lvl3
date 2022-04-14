import axios from 'axios';
import parser from './parser.js';

const getLink = (url) => `https://allorigins.hexlet.app/get?url=${encodeURIComponent(url)}`;

export default (watchedState, url, state) => {
  axios.get(getLink(url))
    .then((response) => response.data)
    .then((data) => {
      const parseData = parser(data);
      watchedState.posts = state.posts.concat(parseData.posts);
      watchedState.feeds.push({
        title: parseData.feedTitle,
        description: parseData.feedDesc,
        link: parseData.feedLink,
        id: parseData.id,
      });
    });
};

// 1. Получить данные
// 2. Распарсить данные
// 3. Отрисовать распаршенные данные
