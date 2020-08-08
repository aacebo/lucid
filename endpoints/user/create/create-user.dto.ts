import { IsEmail, Length, MinLength, Matches } from 'class-validator';

export default class CreateUser {
  @MinLength(1, { message: 'required' })
  readonly firstName: string;

  @MinLength(1, { message: 'required' })
  readonly lastName: string;

  @IsEmail(undefined, { message: 'must be a valid email' })
  @MinLength(1, { message: 'required' })
  readonly email: string;

  @Matches(/^(?=.*\d).{8,25}$/, { message: 'must have at least 1 number and be of length 8-25' })
  readonly password: string;

  constructor(user?: Partial<CreateUser>) {
    if (user) {
      Object.assign(this, user);
    }
  }
}
