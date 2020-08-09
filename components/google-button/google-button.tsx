import {
  useSession,
  signIn,
  signOut,
} from 'next-auth/client';

import GoogleLogo from '../../public/google.svg';

import IGoogleButtonProps from './google-button-props.interface';
import styles from './google-button.module.scss';

export default function GoogleButton(props: IGoogleButtonProps) {
  const [ session, loading ] = useSession();

  const click = () => {
    if (session) {
      signOut('google');
    } else {
      signIn('google');
    }
  };

  return (
    <button
      type="button"
      className={`${styles.container} ${props.className}`}
      disabled={loading}
      onClick={click}
    >
      <GoogleLogo className={styles.logo} />
      <span className={styles.text}>
        { session ? 'Sign out' : 'Sign in' } with Google
      </span>
    </button>  
  );
}
