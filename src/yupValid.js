import * as yup from 'yup';

export default (url, i18n, state) => {
  const schema = yup.string().url(i18n.t('feedback.invalid')).notOneOf([state.requests, i18n.t('feedback.repeat')]).required();

  return schema.validate(url);
};
