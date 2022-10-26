import useFetching from "../../../hook/useFetch";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hook/useForm";
import { signUp } from "../api/api";

import { useCallback, useEffect } from "react";
import { ROUTE_NAMES } from "../../../router/routeNames";
import {useFormik} from "formik"
import { mapValues, values } from "lodash";
import { SignUpSchema, SignUpValidation } from "../validation";
import { SignUpLayout } from "../components/SignUpLayout";
import RegistrationForm from "../components/SignUpForm";

const SignUpContainer = () => {
  const navigate = useNavigate();

  const { data, handleDataLoad, error } = useFetching(
    signUp,
    null,
    false
  );

  const formik = useFormik({
    initialValues:{
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "male",
    phone: "",
    },

    onSubmit: (values,{resetForm})=>{
      handleDataLoad(values)
      resetForm();
    },
    validationSchema: SignUpSchema,
     validateOnBlur:true,
  })

  const handleSignIn = useCallback(() => {
      navigate(ROUTE_NAMES.SIGN_IN);
  }, []);

  useEffect(() => {
    if (data?.data.success) {
      const timeout = setTimeout(() => {
        navigate(ROUTE_NAMES.SIGN_IN);
      }, 2000);

      return () => clearTimeout(timeout);
    }
   
  }, [data, navigate, error]);
  const handleCreate = useCallback(() => {
   
  }, []);

 
  return (
    <RegistrationForm
      formik={formik}
      touched={formik.touched}
      onBlur={formik.handleBlur}
      data={data}
      error={error}
      values={values}
      handleSignIn={handleSignIn}
    />
  );
};

export default SignUpContainer;
