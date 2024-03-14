import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import { validationSchema, initialValues } from "./form-schema/";
import { Link } from "react-router-dom";

const Login = () => {
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (formData) => {
        console.log("Form data:", formData);
      },
    });

  return (
    <>
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image"
          />
        </div>
        <form className="md:w-1/3 max-w-sm" onSubmit={handleSubmit}>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Email"
            name="email" // Use name attribute for formik handling
            value={values.email} // Use values from formik state
            onChange={handleChange} // Use handleChange for formik updates
            onBlur={handleBlur} // Use handleBlur for formik validation
          />
          {errors.email &&
            touched.email && ( // Display error message conditionally
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}

          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Senha"
            name="password" // Use name attribute for formik handling
            value={values.password} // Use values from formik state
            onChange={handleChange} // Use handleChange for formik updates
            onBlur={handleBlur} // Use handleBlur for formik validation
          />
          {errors.password &&
            touched.password && ( // Display error message conditionally
              <p className="text-red-500 text-xs">{errors.password}</p>
            )}

          <div className="mt-4 flex justify-between font-semibold text-sm">
            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
              <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                <input className="mr-1" type="checkbox" />
                <span>Lembrar</span>
              </label>
            </div>
            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
              <span className="p-1">Não tem uma conta?</span>
              <Link
                className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                to="../Register/index.tsx"
              >
                Cadastre-se
              </Link>
            </div>
          </div>
          <div className="text-center md:text-left">
            <Button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-9 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Acessar
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
