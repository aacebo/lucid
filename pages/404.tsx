import Head from 'next/head';

import styles from './404.module.scss';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lucid: Not Found</title>
      </Head>

      <main className={styles.main}>
        <h1>Page not found!</h1>
      </main>
    </div>
  );
}
