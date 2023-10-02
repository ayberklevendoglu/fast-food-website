import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Your name must be at least 3 characters long")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email adress").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Required")
    .max(20, "Password must be at most 20 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
    ),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
