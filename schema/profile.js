import * as Yup from "yup";

export const profileSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Your name must be at least 3 characters long")
    .max(50, "Too Long!")
    .required("Required"),
  phoneNumber: Yup.string()
    .min(10, "Your phone number must be 10 characters long")
    .max(10, "Your phone number must be 10 characters long")
    .required("Required"),
  email: Yup.string().email("Invalid email adress").required("Required"),
  address: Yup.string().required("Required"),
  date: Yup.date().required("Required"),
  bio: Yup.string(),
});
