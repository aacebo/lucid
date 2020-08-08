import cn from 'classnames';

import IAppIconProps from './app-icon-props.interface';
import styles from './app-icon.module.scss';

export default function AppIcon(props: IAppIconProps) {
  return (
    <div
      className={cn({
        [props.className]: true,
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
