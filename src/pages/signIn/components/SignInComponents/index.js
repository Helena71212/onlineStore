import { TextField, Tooltip } from "@mui/material";

import { FormHelperText } from '@mui/material'
import Spinner from "../../../../components/spinner";
import SnackbarWithAlert from "../../../../components/snackbar"
import styles from "./index.module.css";

const SignIn = ({
  formik,
 error,
 touched,
 onClose,
 isAuth,
 isLoading,
handleSignUp,

}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.auth}>
        <h1>Login or create an account</h1>
          <p>Already a customer? Login using your email address.</p>
          {isLoading ? <Spinner /> :
          <form onSubmit={formik.handleSubmit} className={styles.authForm}>
     <div className={styles.authArea}>
     <div className={styles.input}>
            <TextField
              id="email"
              value={formik.values.email}
              name="email"
              type="email"
              color={formik.errors.email ? "error" : "success"}
              label={touched && error? formik.errors.email : "Email"}
              onChange={formik.handleChange}
              onBlur ={formik.handleBlur}
            />
          </div>

          <div className={styles.input}>
            <Tooltip title="Enter password" placement="right-start">
              <TextField
                id="password"
                value={formik.values.password}
                name="password"
                type={"password"}
                label={formik.errors.password ? ` ${formik.errors.password}` : "Password"}
                color={formik.errors.password ? "error" : "success"}
                onChange={formik.handleChange}
              />
            </Tooltip>
          </div>
      </div>    
          <div className={styles.buttonArea}>
            <button className={styles.btnSignIn}  type="submit">
              Sign In
            </button>
            <p>
              Don’t have an account yet?
              <br />
              Creating an account is easy!
            </p>
            <button
              className={styles.btnSignUp}
              onClick={handleSignUp}
              type="primary"
            >
              Create account
            </button>
          </div>
        </form>}
      </div>

      {isLoading && <Spinner color="black" />}

      {isAuth && (
        <SnackbarWithAlert
          timeAlert={1000}
          textAlert="You successfully log in."
          severity="success"
        />
      )}

       {error && (
        <SnackbarWithAlert
          timeAlert={3000}
          textAlert="Please,try again"
          severity="error"
        />
      )}
    </div>
  );
};

export default SignIn;
