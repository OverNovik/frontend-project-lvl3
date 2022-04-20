import parseData from './parseData.js';

export default (data) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(data.contents, 'text/xml');
  const result = parseData(doc);
  return result;
};
