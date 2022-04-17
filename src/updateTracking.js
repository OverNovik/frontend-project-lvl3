import { map } from 'lodash';

export const isUnique = (state, title) => {
  const same = state.feeds.find((feed) => feed.title === title);
  return !same;
};

export default (state, watchedState, parseData) => {
  const postTitles = map(state.posts, 'title');
  const newPosts = parseData.posts.filter((post) => !postTitles.includes(post.title));
  if (newPosts.length) {
    watchedState.posts = state.posts.concat(newPosts);
  }

  if (isUnique(state, parseData.feedTitle)) {
    watchedState.feeds.push({
      title: parseData.feedTitle,
      description: parseData.feedDesc,
      link: parseData.feedLink,
      id: parseData.id,
    });
  }
};
