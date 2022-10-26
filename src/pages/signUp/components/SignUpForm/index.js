import { useState } from "react";

import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";

import { conditionPassword, phoneNumber } from "../../validation/Regexp";

import styles from "./index.module.css";

const RegistrationForm = ({
  formik,
  data,
  error,
  errors,
  touched,
  handleSignIn,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>CREATE AN ACCOUNT</h1>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
       
          <div className={styles.input}>
            <TextField
              id="email"
              value={formik.values.email}
              name="email"
              type="email"
              color={formik.errors.email ? "error" : "success"}
              touched={formik.touched.email}
              label={formik.touched.email && formik.errors.email?formik.errors.email : "Email"}
              errors={formik.errors.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>

          <div className={styles.input}>
            <Tooltip title={conditionPassword} placement="right-start">
              <TextField
                id="password"
                value={formik.values.password}
                name="password"
                type={"password"}
                color={formik.errors.password ? "error" : "success"}
                touched={formik.touched.password}
                label={
                  formik.errors.password && formik.touched.password? formik.errors.password : "Password"
                }
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </Tooltip>
          </div>
<div className={styles.input}>
<TextField
            id="firstName"
            value={formik.values.firstName}
            name="firstName"
            type="firstName"
            color={formik.errors.firstName ? "error" : "success"}
            label={
              formik.errors.firstName ? formik.errors.firstName : "First name"
            }
            onChange={formik.handleChange}
          />
</div>
<div className={styles.input}>
<TextField
            id="lastName"
            value={formik.values.lastName}
            name="lastName"
            type="lastName"
            color={formik.errors.lastName ? "error" : "success"}
            label={
              formik.errors.lastName ? formik.errors.lastName : "Last name"
            }
            onChange={formik.handleChange}
          />
</div>
        
<div className={styles.input}>
  <FormControl>
    <InputLabel
    id ="gender">
    </InputLabel>
  <Select
            labelId="gender"
            id="gender"
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
          </Select>
  </FormControl>

</div>
<div className={styles.input}>
<Tooltip title={phoneNumber} placement="right-start">
            <TextField
              id="phone"
              value={formik.values.phone}
              name="phone"
              type="phone"
              color={formik.errors.phone ? "error" : "success"}
              touched={formik.touched.phone}
              label={formik.touched.phone && formik.errors.phone ? formik.errors.phone : "Phone"}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </Tooltip>
</div>
      
        <div className={styles.buttonArea}>
          <button className={styles.btnRegistr} type="submit">
            Create Account
          </button>

          <p className={styles.successMessage}>{data?.data?.message}</p>
          <p className={styles.failMessage}>{error?.response.data.message}</p>

          <p>Already have an account?</p>
          <button
            onClick={handleSignIn}
            className={styles.btnSignIn}
            type="primary"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
