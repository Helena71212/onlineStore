import React, { useCallback, useEffect, useState } from "react";
import useFetching from "../../../hook/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hook/useForm";
import { ROUTE_NAMES } from "../../../router/routeNames";
import SignIn from "../components/SignInComponents";
import { signIn } from "../reducers";
import { useFormik } from "formik";
import { SignInSchema } from "../validation";
import { isAuthSelector } from "../selectors";

const AuthContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values, { resetForm }) => {
      dispatch(signIn(values));
      resetForm();
    },
    validationSchema: SignInSchema,
  });

  const handleSignUp = useCallback(() => {
    navigate(ROUTE_NAMES.SIGN_UP);
  }, []);

  const isAuth =  useSelector(isAuthSelector);

  useEffect(() => {
    if (isAuth) {
      const timeout = setTimeout(() => {
        navigate(ROUTE_NAMES.SHOP);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isAuth, navigate]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <SignIn
      formik={formik}
      touched={formik.touched}
      onBlur={formik.handleBlur}
      error={formik.errors}
      isAuth={isAuth}
      open={open}
      isLoading={formik.isLoading}
      handleSignUp={handleSignUp}
      onClickOpen={handleClickOpen}
      onClose={handleClose}
    />
  );
};

export default AuthContainer;
