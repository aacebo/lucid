import UserProvider from '../../endpoints/user/user-provider.type';

export default interface ISSOButtonProps {
  readonly className?: string;
  readonly provider?: UserProvider;
}
