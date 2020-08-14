import ISSOUser from './sso-user.interface';

export default interface IUserSession {
  readonly expires: string | Date;
  readonly user: ISSOUser;
}
