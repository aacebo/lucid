import { validate } from 'class-validator';

export default async function classValidatorMap<D, T extends Constructor<D>>(v: D, Dto: T) {
  let errors: { [field: string]: string } = { };
  const errs = await validate(new Dto(v));

  for (const err of errs) {
    errors[err.property] = Object.values(err.constraints)[0];
  }

  return errors;
}
