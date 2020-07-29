import Head from 'next/head';
import Link from 'next/link';
import { Button } from '@material-ui/core';

import AppIcon from '../components/app-icon/app-icon';

import styles from './index.module.scss';

export default function Index() {
  const click = () => {
    console.log('clicked');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Lucid: Welcome</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.toolbar}>
          <div>
            <AppIcon size="sm" />
          </div>
          <div className={styles.spacer}></div>
          <div>
            <Link href="/sign-up">
              <Button color="primary">Sign Up</Button>
            </Link>

            <Link href="/login">
              <Button color="primary">Login</Button>
            </Link>

            <Link href="/about">
              <Button color="primary">About</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className={styles.main}>
      </main>

      <footer className={styles.footer} onClick={click}>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { },
  };
}
