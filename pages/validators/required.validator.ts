import { Validator } from './validator.interface';

const required: Validator = (v, prop, errors) => {
  const err = { ...errors };

  if (!v[prop]) {
    err[prop] = 'Required';
  }

  return err;
};

export default required;
