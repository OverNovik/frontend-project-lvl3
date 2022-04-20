export default (url) => {
  const newUrl = new URL(`https://allorigins.hexlet.app/get?url=${url}`);
  newUrl.searchParams.set('disableCache', true);
  return newUrl.toString();
};
