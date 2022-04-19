export default (url) => {
  const newUrl = new URL(`https://allorigins.hexlet.app/get?url=${encodeURIComponent(url)}`);
  newUrl.searchParams.set('disableCache', true);
  return newUrl.toString();
};
