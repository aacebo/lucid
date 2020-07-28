import Head from 'next/head';

import styles from './index.module.scss';

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lucid: Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { },
  };
}
