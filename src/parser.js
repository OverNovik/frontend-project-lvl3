import parseData from './parseData.js';

export default (data, i18n) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(data.contents, 'text/xml');
  const result = parseData(doc, i18n);

  return result;
};
