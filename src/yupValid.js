import * as yup from 'yup';

export default (url) => {
  const schema = yup.string().url('inValid').required();

  return schema.validate(url);
};
