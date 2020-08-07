import {
  useSession,
  signin,
  signout,
} from 'next-auth/client';

import styles from './google-button.module.scss';

export default function GoogleButton() {
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
      { session ? 'Sign Out' : 'Sign In' }
    </button>    
  );
}
