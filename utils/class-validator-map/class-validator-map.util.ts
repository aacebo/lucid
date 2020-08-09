import { validate } from 'class-validator';

export default async function classValidatorMap<V, T extends Constructor<V>>(v: V, Class: T) {
  let errors: { [field: string]: string } = { };
  const errs = await validate(new Class(v));

  for (const err of errs) {
    errors[err.property] = Object.values(err.constraints)[0];
  }

  return errors;
}
