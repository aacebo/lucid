import UserProvider from './user-provider.type';

export default interface IUserSession {
  readonly expires: string | Date;
  readonly user: {
    readonly name: string;
    readonly email: string;
    readonly image: string;
    readonly provider?: UserProvider;
  };
}
