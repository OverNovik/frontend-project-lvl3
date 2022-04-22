import parseData from './parseData.js';

export default (data, i18n, watchedState) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(data.contents, 'text/xml');
  const result = parseData(doc, i18n, watchedState);

  return result;
};
