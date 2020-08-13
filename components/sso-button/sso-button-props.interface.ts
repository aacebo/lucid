import UserProvider from '../../endpoints/user/user-provider.type';
import IUserSession from '../../endpoints/user/user-session.interface';

export default interface ISSOButtonProps {
  readonly className?: string;
  readonly provider?: UserProvider;
  readonly session?: IUserSession;
  readonly loading?: boolean;
}
