import * as yup from 'yup';

export default (url, i18n) => {
  const schema = yup.string().url(i18n.t('feedback.invalid')).required();

  return schema.validate(url);
};
