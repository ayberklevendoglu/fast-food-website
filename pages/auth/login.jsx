import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import { useFormik } from "formik";
import { loginSchema } from "@/schema/login";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const Login = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((r) => setTimeout(r, 1000));
    actions.resetForm();
  };
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];

  return (
    <div className="container mx-auto">
      <form className="flex flex-col items-center my-32 gap-8 " onSubmit={handleSubmit}>
        <Title addClass="text-4xl">Login</Title>
        <div className="flex flex-col gap-4 md:w-1/2 w-full">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
          <button className="btn-primary uppercase font-large">Login</button>
          <button className="btn-secondary uppercase flex justify-center items-center gap-3">
            <AiFillGithub className="text-2xl"/>
            Github
          </button>
          <Link href="auth/register">
            <span className="text-sm text-slate-600 underline">Do you have no account?</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
