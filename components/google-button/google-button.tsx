import {
  useSession,
  signin,
  signout,
} from 'next-auth/client';

import GoogleLogo from '../../public/google.svg';

import IGoogleButtonProps from './google-button-props.interface';
import styles from './google-button.module.scss';

export default function GoogleButton(props: IGoogleButtonProps) {
  const [ session, loading ] = useSession();

  const click = () => {
    if (session) {
      signout('google');
    } else {
      signin('google');
    }
  };

  return (
    <button
      type="button"
      className={`${styles.container} ${props.className}`}
      onClick={click}
    >
      <GoogleLogo className={styles.logo} />
      <span className={styles.text}>
        { session ? 'Sign out' : 'Sign in' } with Google
      </span>
    </button>  
  );
}
