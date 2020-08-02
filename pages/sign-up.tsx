import { GetStaticProps } from 'next';
import { Container, Card, CardContent, CardHeader, CardActions, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Formik, FormikHelpers } from 'formik';

import ICreateUser from './models/user/create-user.interface';
import required from './validators/required.validator';

import styles from './sign-up.module.scss';

export default function SignUp() {
  const validate = (v: ICreateUser) => {
    let errors = { };

    errors = required(v, 'email', errors);
    errors = required(v, 'password', errors);

    return errors;
  };

  const submit = async (v: ICreateUser, fh: FormikHelpers<ICreateUser>) => {
    console.log(v);
  };

  return (
    <Container className={styles.container}>
      <Formik
        initialValues={{ }}
        isInitialValid={false}
        validate={validate}
        onSubmit={submit}
      >
        {
          fp => (
            <form onSubmit={fp.handleSubmit}>
              <Card variant="outlined" className={styles['form-card']}>
                <CardHeader title="Sign Up"></CardHeader>

                <CardContent>
                  <TextField
                    name="email"
                    label="Email"
                    variant="outlined"
                    className={styles['form-control']}
                    value={fp.values?.email || ''}
                    onChange={fp.handleChange}
                    onBlur={fp.handleBlur}
                  ></TextField>

                  <TextField
                    name="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    className={styles['form-control']}
                    value={fp.values?.password || ''}
                    onChange={fp.handleChange}
                    onBlur={fp.handleBlur}
                  ></TextField>
                </CardContent>

                <CardActions>
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    disabled={fp.isSubmitting || !fp.isValid || !fp.dirty}
                  >
                    Submit
                  </Button>
                </CardActions>
              </Card>
            </form>
          )
        }
      </Formik>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { },
  };
}
