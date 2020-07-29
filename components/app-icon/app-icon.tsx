import cn from 'classnames';

import styles from './app-icon.module.scss';

export default function AppIcon(props: { size?: 'sm' | 'md' | 'lg' }) {
  return (
    <div
      className={cn({
        [styles.container]: true,
        [styles.sm]: props.size === 'sm',
        [styles.md]: props.size === 'md',
        [styles.lg]: props.size === 'lg',
      })}
    >
      <img src="/icon/icon-96x96.png" draggable="false" />
    </div>
  );
}
