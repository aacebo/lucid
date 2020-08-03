import { Validator } from '../validator.interface';

const password: Validator = (v, prop, errors) => {
  const err = { ...errors };
  const re = /^(?=.*\d).{4,8}$/;

  if (v[prop] && !re.test(String(v[prop]))) {
    err[prop] = 'Must be between 4 and 8 digits long and include at least one numeric digit';
  }

  return err;
};

export default password;
