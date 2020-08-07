import { IsEmail, Length } from 'class-validator';

export default class CreateUser {
  readonly firstName: string;
  readonly lastName: string;

  @IsEmail()
  readonly email: string;

  @Length(8, 25)
  readonly password: string;
}
