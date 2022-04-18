import * as yup from 'yup';

const isUnique = (state, url) => {
  const same = state.requests.find((request) => request === url);
  return !same;
};

export default (url, i18n, state) => {
  const schema = yup.string().url(i18n.t('feedback.invalid')).required().test('repeat', i18n.t('feedback.repeat'), () => isUnique(state, url));

  return schema.validate(url);
};
