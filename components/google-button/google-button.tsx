import {
  useSession,
  signin,
  signout,
} from 'next-auth/client';

import styles from './google-button.module.scss';

export default function GoogleButton() {
  const [ session, loading ] = useSession();

  return (
    <div className={styles.container}>
      {!session && <>
        Not signed in <br/>
        <button onClick={signin}>Sign in</button>
      </>}
      {session && <>
        Signed in as {session.user.email} <br/>
        <button onClick={signout}>Sign out</button>
      </>}
    </div>
  );
}
