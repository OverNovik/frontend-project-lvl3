import _ from 'lodash';

export default (doc) => {
  const feedId = _.uniqueId();
  const feedTitle = doc.querySelector('title');
  const feedDesc = doc.querySelector('description');
  const feedLink = doc.querySelector('link');
  const items = doc.querySelectorAll('item');
  const posts = [...items].map((item) => {
    const postId = _.uniqueId();
    const postTitle = item.querySelector('title');
    const postDesc = item.querySelector('description');
    const postLink = item.querySelector('link');
    return {
      title: postTitle.textContent,
      description: postDesc.textContent,
      link: postLink.textContent,
      postId,
    };
  });

  return {
    feedTitle: feedTitle.textContent,
    feedDesc: feedDesc.textContent,
    feedLink: feedLink.textContent,
    feedId,
    posts,
  };
};
