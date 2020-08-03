import { useState } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { Card, CardContent, CardHeader, CardActions, TextField, ThemeProvider, CircularProgress } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';

import theme from '../utils/theme/theme.util';
import ICreateUser from '../dtos/user/create-user.interface';
import required from '../validators/required/required.validator';
import email from '../validators/email/email.validator';
import password from '../validators/password/password.validator';
import userService from '../services/user/user.service';

import styles from './sign-up.module.scss';
import formStyles from '../styles/form.module.scss';

const THEME = theme('dark');

function validate(v: Partial<ICreateUser>) {
  let errors = { };

  errors = email(v, 'email', required(v, 'email', errors));
  errors = password(v, 'password', required(v, 'password', errors));
  errors = required(v, 'firstName', errors);
  errors = required(v, 'lastName', errors);

  return errors;
};

export default function SignUp() {
  const [loading, setLoading] = useState(false);

  const submit = async (v: ICreateUser) => {
    setLoading(true);

    const res = await userService.create(v);
    console.log(res.data);

    if (res.status === 201) {
    } else {
    }

    setLoading(false);
  };

  return (
    <ThemeProvider theme={THEME}>
      <div className={styles.container}>
        <Head>
          <title>Lucid: Sign Up</title>
        </Head>

        <Formik
          initialValues={{ }}
          validate={validate}
          onSubmit={submit}
        >
          {
            fp => (
              <form
                noValidate
                autoComplete="off"
                onSubmit={fp.handleSubmit}
              >
                <Card variant="outlined" className={styles.card}>
                  <CardHeader title="Sign Up"></CardHeader>

                  <CardContent className={formStyles.form}>
                    <div className={formStyles.group}>
                      <TextField
                        name="firstName"
                        label="First Name"
                        variant="outlined"
                        className={formStyles.control}
                        style={{ flex: '1 1 50%' }}
                        value={fp.values.firstName || ''}
                        error={!!fp.errors.firstName && fp.touched.firstName}
                        helperText={fp.touched.firstName ? fp.errors.firstName : undefined}
                        onChange={fp.handleChange}
                        onBlur={fp.handleBlur}
                      ></TextField>

                      <TextField
                        name="lastName"
                        label="Last Name"
                        variant="outlined"
                        className={formStyles.control}
                        style={{ flex: '1 1 50%' }}
                        value={fp.values.lastName || ''}
                        error={!!fp.errors.lastName && fp.touched.lastName}
                        helperText={fp.touched.lastName ? fp.errors.lastName : undefined}
                        onChange={fp.handleChange}
                        onBlur={fp.handleBlur}
                      ></TextField>
                    </div>

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
                    ></TextField>

                    <TextField
                      name="password"
                      label="Password"
                      variant="outlined"
                      type="password"
                      className={formStyles.control}
                      value={fp.values.password || ''}
                      error={!!fp.errors.password && fp.touched.password}
                      helperText={fp.touched.password ? fp.errors.password : undefined}
                      onChange={fp.handleChange}
                      onBlur={fp.handleBlur}
                    ></TextField>
                  </CardContent>

                  <CardActions>
                    <Button
                      variant="contained"
                      type="submit"
                      color="primary"
                      disabled={fp.isSubmitting || !fp.isValid || !fp.dirty || loading}
                    >
                      Submit
                      {loading && <CircularProgress size={20} className={styles.progress} />}
                    </Button>

                    <Link href="/">
                      <Button>
                        Back
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </form>
            )
          }
        </Formik>
      </div>
    </ThemeProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { },
  };
}
