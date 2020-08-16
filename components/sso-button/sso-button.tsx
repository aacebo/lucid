import { signIn, signOut } from 'next-auth/client';
import cn from 'classnames';

import GoogleLogo from '../../public/google.svg';

import ISSOButtonProps from './sso-button-props.interface';
import styles from './sso-button.module.scss';

const ssoResources = {
  google: {
    className: styles.google,
    Icon: GoogleLogo,
  },
};

export default function SSOButton(props: ISSOButtonProps = { }) {
  const resource = ssoResources[props.provider];

  const click = () => {
    if (props.session) {
      signOut(props.provider);
    } else {
      signIn(props.provider);
    }
  };

  return (
    <button
      type="button"
      className={cn({
        [styles.host]: true,
        [props.className]: !!props.className,
        [resource?.className]: !!resource,
      })}
      disabled={props.loading}
      onClick={click}
    >
      { resource && <resource.Icon className={styles.logo} /> }
      <span className={styles.text}>
        { props.session ? 'Sign out' : 'Sign in' }
        { props.provider && ` with ${ props.provider }` }
      </span>
    </button>  
  );
}
