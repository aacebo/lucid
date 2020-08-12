export default interface IGoogleUserAccount {
  readonly provider: 'google';
  readonly type: 'oauth';
  readonly id: string;
  readonly refreshToken?: string;
  readonly accessToken: string;
  readonly accessTokenExpires?: Date | null;
}