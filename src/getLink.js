export default (url) => {
  const newUrl = new URL('https://allorigins.hexlet.app/get?url=');
  newUrl.searchParams.set('disableCache', true);
  newUrl.searchParams.set('url', url);
  console.log(newUrl.toString());
  return newUrl.toString();
};
