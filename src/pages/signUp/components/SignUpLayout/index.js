import Spinner from "../../../../components/spinner"
import RegistrationForm from "../SignUpForm"
import SnackbarWithAlert from "../../../../components/snackbar"
import { Snackbar } from "@mui/material"
import Alert from "@mui/material"

export const SignUpLayout = ({
   formik,
   data,
   error,
   valuePassword,
   isLoading,
 }) => {
   return (
       <RegistrationForm
         formik={formik}
         data={data}
         error={error}
         valuePassword={valuePassword}
         />
   )}