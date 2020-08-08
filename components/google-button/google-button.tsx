import { ComponentProps } from 'react';
import {
  useSession,
  signin,
  signout,
} from 'next-auth/client';

import GoogleLogo from '../../public/google.svg';

import styles from './google-button.module.scss';

export default function GoogleButton(_props: ComponentProps<'button'>) {
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
      className={styles.container}
      onClick={click}
    >
      <GoogleLogo className={styles.logo} />
      <span className={styles.text}>
        { session ? 'Sign out' : 'Sign in' } with Google
      </span>
    </button>  
  );
}
