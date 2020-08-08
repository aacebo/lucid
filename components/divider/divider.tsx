import { PropsWithChildren } from 'react';

import IDividerProps from './divider-props.interface';
import styles from './divider.module.scss';

export default function Divider(props: PropsWithChildren<IDividerProps>) {
  return (
    <div className={`${styles.container} ${props.className}`}>
      <div className={styles.left} />
      <div className={styles.center}>{props.children}</div>
      <div className={styles.right} />
    </div>
  );
}
