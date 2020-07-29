import styles from './sign-up.module.scss';

export default function signUp() {
  return (
    <div className={styles.container}>sign up</div>
  );
}

export async function getStaticProps() {
  return {
    props: { },
  };
}
