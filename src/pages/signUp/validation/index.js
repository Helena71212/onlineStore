import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Valid Email is required")
    .required("This field cannot be empty"),
  password: Yup.string()
    .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}/, "Invalid password")
    .required("This field cannot be empty"),
  firstName: Yup.string()
    .min(3, "Must be more than 2 characters")
    .max(15, "Must be 15 characters or less")
    .required("First name is required"),
  lastName: Yup.string()
    .min(3, "Must be more than 2 characters")
    .max(20, "Must be 15 characters or less")
    .required("Last name is required"),
  gender: Yup.string().required("Gender is required"),
  phone: Yup.string()
    .matches(
      /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/,
      "Invalid phone number"
    )
    .required("Phone is required"),
});
