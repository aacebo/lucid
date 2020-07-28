import Head from 'next/head';

import pkg from '../package.json';

import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{pkg.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
