import { useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
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
import * as cv from 'class-validator';

import CreateUser from '../endpoints/user/create/create-user.dto';
import userService from '../endpoints/user/user.service';
import GoogleButton from '../components/google-button/google-button';

import styles from './sign-up.module.scss';
import formStyles from '../styles/form.module.scss';

async function validate(v: Partial<CreateUser>) {
  let errors = { };
  const errs = await cv.validate(new CreateUser(v));

  for (const err of errs) {
    errors[err.property] = Object.values(err.constraints)[0];
  }

  return errors;
};

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const submit = async (v: CreateUser) => {
    setLoading(true);

    const res = await userService.create(v);
    console.log(res.data);

    if (res.status === 201) {
    } else {
    }

    setLoading(false);
  };

  return (
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
              className={formStyles.form}
              onSubmit={fp.handleSubmit}
            >
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
                />

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
                />
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

              <Button
                variant="contained"
                type="submit"
                color="primary"
                className={styles.action}
                disabled={fp.isSubmitting || !fp.isValid || !fp.dirty || loading}
              >
                Submit
                { loading && <CircularProgress size={20} className={styles.progress} /> }
              </Button>

              <GoogleButton className={styles.action} />
            </form>
          )
        }
      </Formik>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { },
  };
}
