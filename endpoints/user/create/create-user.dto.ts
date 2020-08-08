import { IsEmail, Length, MinLength } from 'class-validator';

export default class CreateUser {
  @MinLength(1)
  readonly firstName: string;

  @MinLength(1)
  readonly lastName: string;

  @IsEmail()
  @MinLength(1)
  readonly email: string;

  @Length(8, 25)
  readonly password: string;

  constructor(user?: Partial<CreateUser>) {
    if (user) {
      Object.assign(this, user);
    }
  }
}
