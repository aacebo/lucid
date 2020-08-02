import { Validator } from '../validator.interface';

const email: Validator = (v, prop, errors) => {
  const err = { ...errors };
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (v[prop] && !re.test(String(v[prop]).toLowerCase())) {
    err[prop] = 'Email must be valid';
  }

  return err;
};

export default email;
