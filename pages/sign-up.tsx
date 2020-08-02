import { GetStaticProps } from 'next';
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  TextField,
} from '@material-ui/core';
import { Formik, FormikHelpers } from 'formik';

import ICreateUser from './models/user/create-user.interface';

import styles from './sign-up.module.scss';

export default function SignUp() {
  const validate = (v: ICreateUser) => {
    console.log(v);
  };

  const submit = (v: ICreateUser, fh: FormikHelpers<ICreateUser>) => {
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ }}
        validate={validate}
        onSubmit={submit}
      >
        {
          fp => (
            <Card variant="outlined" className={styles['form-card']}>
              <CardHeader title="Sign Up"></CardHeader>

              <CardContent>
                <form onSubmit={fp.handleSubmit}>
                  <TextField
                    name="email"
                    label="Email"
                    variant="outlined"
                    value={fp.values?.email || ''}
                    onChange={fp.handleChange}
                    onBlur={fp.handleBlur}
                  ></TextField>

                  <TextField
                    name="password"
                    label="Password"
                    variant="outlined"
                    value={fp.values?.password || ''}
                    onChange={fp.handleChange}
                    onBlur={fp.handleBlur}
                  ></TextField>
                </form>
              </CardContent>

              <CardActions>

              </CardActions>
            </Card>
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
