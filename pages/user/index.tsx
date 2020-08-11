import GoogleButton from '../../components/google-button/google-button';
import isAuthOrRedirect from '../../middleware/is-auth-or-redirect/is-auth-or-redirect.middleware';

import styles from './index.module.scss';

export default function UserIndex() {
  return (
    <div className={styles.container}>
      <GoogleButton />
    </div>
  );
}

export const getServerSideProps = isAuthOrRedirect(async () => {
  return {
    props: { },
  };
});
