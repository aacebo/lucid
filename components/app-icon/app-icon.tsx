import cn from 'classnames';

import IAppIconProps from './app-icon-props.interface';
import styles from './app-icon.module.scss';

export default function AppIcon(props: IAppIconProps) {
  const size = props.size || 'md';

  return (
    <div
      className={cn({
        [styles.container]: true,
        [props.className]: !!props.className,
        [styles.sm]: size === 'sm',
        [styles.md]: size === 'md',
        [styles.lg]: size === 'lg',
      })}
    >
      <img src="/icon/icon-96x96.png" draggable="false" />
    </div>
  );
}
