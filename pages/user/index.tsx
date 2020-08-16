import React from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/client';
import { withStyles, StyledComponentProps } from '@material-ui/core/styles';

import SSOButton from '../../components/sso-button/sso-button';
import Sidenav from '../../components/sidenav/sidenav';
import isAuthOrRedirect from '../../middleware/is-auth-or-redirect/is-auth-or-redirect.middleware';

import styles from './index.styles';

function UserIndex(props: StyledComponentProps) {
  const [ session, sessionLoading ] = useSession();
  const [ sidenavOpen, setSidenavOpen ] = React.useState(true);

  return (
    <div className={props.classes.host}>
      <Head>
        <title>Lucid: User</title>
      </Head>

      <Sidenav
        open={sidenavOpen}
        session={session}
        onOpen={() => setSidenavOpen(true)}
        onClose={() => setSidenavOpen(false)}
      >
        <SSOButton session={session} loading={sessionLoading} />
      </Sidenav>
    </div>
  );
}

export const getServerSideProps = isAuthOrRedirect(async () => {
  return {
    props: { },
  };
});

export default withStyles(styles)(UserIndex);
