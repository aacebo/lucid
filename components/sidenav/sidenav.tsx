import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';

import ISidenavProps from './sidenav-props.interface';
import styles from './sidenav.styles';

function Sidenav(props: React.PropsWithChildren<ISidenavProps> = { }) {
  return (
    <div className={cn({
      [props.classes.host]: true,
      [props.className]: !!props.className,
    })}>
      <nav>
        <Drawer
          anchor="left"
          variant="persistent"
          open={props.open}
          onClose={props.onClose}
        >
          <div className="spacer" />
          { props.session && <Avatar alt={props.session.user.name} src={props.session.user.image} /> }
        </Drawer>
      </nav>

      <main style={{ marginLeft: props.open ? '50px' : undefined }}>
        { props.children }
      </main>
    </div>
  );
}

export default withStyles(styles)(Sidenav);