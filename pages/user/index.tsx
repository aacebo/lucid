import Head from 'next/head';

import SSOButton from '../../components/sso-button/sso-button';
import isAuthOrRedirect from '../../middleware/is-auth-or-redirect/is-auth-or-redirect.middleware';

import styles from './index.module.scss';

export default function UserIndex() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lucid: User</title>
      </Head>

      <SSOButton />
    </div>
  );
}

export const getServerSideProps = isAuthOrRedirect(async () => {
  return {
    props: { },
  };
});
