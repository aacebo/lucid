import Head from 'next/head';

import styles from './index.module.scss';

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lucid: Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
