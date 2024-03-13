import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const Register = () => {
  const { handleSubmit, handleChange, handleBlur, values } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (FormData) => {
      console.log("form data:", FormData);
    },
  });
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <form className="md:w-1/3 max-w-sm" onSubmit={handleSubmit}>

        <h2 className="mb-5 text-center text-4xl text-blue-700">Faça seu cadastro</h2>

        <input
          type="text"
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          name="name"
          placeholder="Nome"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <input
          type="password"
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          name="password"
          placeholder="Senha"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <input
          type="password"
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          name="confirmPassword"
          placeholder="Confirme a Senha"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <input
          type="email"
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          name="email"
          placeholder="Email valido"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />

      <div className="mt-4">
         Já possui cadastro?<Link className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" to="/"> Faça Login </Link>
      </div>
      
        <div>
          <Button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-9 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Cadastrar
          </Button>
        </div>
      </form>
    </section>
  );
};
export { Register };
