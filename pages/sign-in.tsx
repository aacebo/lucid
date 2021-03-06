import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/client';
import { Formik } from 'formik';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import {
  TextField,
  CircularProgress,
  FormControl,
  InputLabel,
  FormHelperText,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
} from '@material-ui/core';

import notAuthOrRedirect from '../middleware/not-auth-or-redirect/not-auth-or-redirect.middleware';
import cvm from '../utils/class-validator-map/class-validator-map.util';
import LoginUser from '../endpoints/user/login/login-user.dto';

import SSOButton from '../components/sso-button/sso-button';
import Divider from '../components/divider/divider';
import AppIcon from '../components/app-icon/app-icon';

import formStyles from '../styles/form.module.scss';
import styles from './sign-up.module.scss';

export default function SignIn() {
  const [ submitting, setSubmitting ] = useState(false);
  const [ showPassword, setShowPassword ] = useState(false);
  const [ session, sessionLoading ] = useSession();

  const submit = async (v: LoginUser) => {
    setSubmitting(true);

    try {
      signIn('local', {
        email: v.email,
        password: v.password,
      });
    } catch (err) {
      console.log(err);
    }

    setSubmitting(false);
  };

  return (
    <div className={styles.host}>
      <Head>
        <title>Lucid: Sign In</title>
      </Head>

      <header>
        <AppIcon />
      </header>

      <Formik
        initialValues={{ }}
        validate={(v: Partial<LoginUser>) => cvm(v, LoginUser)}
        onSubmit={submit}
      >
        {
          fp => (
            <form
              noValidate
              autoComplete="off"
              className={formStyles.form}
              onSubmit={fp.handleSubmit}
            >
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                className={formStyles.control}
                value={fp.values.email || ''}
                error={!!fp.errors.email && fp.touched.email}
                helperText={fp.touched.email ? fp.errors.email : undefined}
                onChange={fp.handleChange}
                onBlur={fp.handleBlur}
              />

              <FormControl variant="outlined" className={formStyles.control}>
                <InputLabel htmlFor="password" error={fp.errors.password && fp.touched.password}>
                  Password
                </InputLabel>
                <OutlinedInput
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={fp.values.password || ''}
                  error={fp.errors.password && fp.touched.password}
                  labelWidth={70}
                  onChange={fp.handleChange}
                  onBlur={fp.handleBlur}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        { showPassword ? <Visibility /> : <VisibilityOff /> }
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {
                  fp.errors.password && fp.touched.password &&
                  <FormHelperText error>
                    { fp.errors.password }
                  </FormHelperText>
                }
              </FormControl>

              <Link href="/">
                <Button className={styles.action}>
                  Back
                </Button>
              </Link>

              <Button
                variant="contained"
                type="submit"
                color="primary"
                className={styles.action}
                disabled={fp.isSubmitting || !fp.isValid || !fp.dirty || submitting}
              >
                Submit
                { submitting && <CircularProgress size={20} className={styles.progress} /> }
              </Button>

              <Divider className={styles.action}>Or</Divider>
              <SSOButton provider="google" className={styles.action} session={session} loading={sessionLoading} />
              <Divider className={styles.action}>Don't have an account?</Divider>
              
              <Link href="/sign-up">
                <Button
                  variant="outlined"
                  color="secondary"
                  className={styles.action}
                >
                  Sign Up For Lucid
                </Button>
              </Link>
            </form>
          )
        }
      </Formik>
    </div>
  );
}

export const getServerSideProps = notAuthOrRedirect(async () => {
  return {
    props: { },
  };
}, '/user');
