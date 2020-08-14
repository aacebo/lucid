export default interface IGoogleProfile {
  readonly id: string;
  readonly email: string;
  readonly verified_email: boolean;
  readonly name: string;
  readonly given_name: string;
  readonly family_name: string;
  readonly picture: string;
  readonly locale: string;
  readonly hd: string;
}