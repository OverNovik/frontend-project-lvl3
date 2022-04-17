import * as yup from 'yup';

export default (url, i18n, state) => {
  const schema = yup.string().url(i18n.t('feedback.invalid')).notOneOf([i18n.t('feedback.repeat'), state.requests]).required();

  return schema.validate(url);
};
