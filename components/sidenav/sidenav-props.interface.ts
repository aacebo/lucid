import { StyledComponentProps } from '@material-ui/core/styles';

import IUserSession from '../../endpoints/user/user-session.interface';

export default interface ISidenavProps extends StyledComponentProps {
  readonly className?: string;
  readonly open?: boolean;
  readonly session?: IUserSession;
  readonly onClose?: () => void;
}
