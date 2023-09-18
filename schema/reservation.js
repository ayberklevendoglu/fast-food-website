import * as Yup from "yup";

export const reservationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Your name must be at least 3 characters long")
    .max(50, "Too Long!")
    .required("Required"),
  phoneNumber: Yup.string()
    .min(10, "Your phone number must be 10 characters long")
    .max(10, "Your phone number must be 10 characters long")
    .required("Required"),
  persons: Yup.number()
    .min(2, "You must be at least 2 person")
    .max(5, "Too many people")
    .required("Required"),
  email: Yup.string().email("Invalid email adress").required("Required"),
  date: Yup.date().required("Required"),
});
