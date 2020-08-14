import UserProvider from './user-provider.type';

export default interface ISSOAccount {
  readonly provider: UserProvider;
  readonly type: 'oauth';
  readonly id: string;
  readonly refreshToken?: string;
  readonly accessToken: string;
  readonly accessTokenExpires?: Date | null;
}