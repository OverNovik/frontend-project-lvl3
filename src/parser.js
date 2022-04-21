import parseData from './parseData.js';

export default (data, i18n) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(data.contents, 'text/xml');
  const parsererror = doc.querySelector('parsererror');
  const result = parseData(doc);

  if (parsererror) {
    throw new Error(i18n.t('feedback.parserError'));
  }

  return result;
};
