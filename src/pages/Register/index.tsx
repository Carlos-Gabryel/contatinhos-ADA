import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { PATHS } from "../../Routers/paths";
import { FC } from "react";
import { userRegister } from "@/Services/registerService";

const Register: FC = () => {
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },

      validationSchema: Yup.object().shape({
        name: Yup.string()
          .min(5, "Usuario deve conter pelo menos 5 caracteres")
          .required("Digite seu nome"),

        email: Yup.string()
          .email("Digite um email válido")
          .required("Digite seu E-mail"),

        password: Yup.string()
          .min(6, "A senha deve ter pelo menos 6 caracteres")
          .matches(/[0-9]/, "A senha deve conter pelo menos um número")
          .matches(/[a-zA-Z]/, "A senha deve conter pelo menos uma letra")
          .required("A senha é obrigatória"),

        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password")], "As senhas devem coincidir")
          .required("Confirme sua senha"),
      }),

      onSubmit: async (FormData) => {
        const { email, password: senha, name: nome } = FormData;
        try {
          await userRegister({email, senha, nome});
          navigate(PATHS.login);
        } catch (error) {
          console.error("Erro ao registrar:", error);
        }
      },
    });
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img src="/src/assets/logo.png" alt="Sample image" />
      </div>
      <form className="md:w-1/3 max-w-sm" onSubmit={handleSubmit}>
        <h2 className="mb-5 text-center text-4xl text-purple-500">
          Faça seu cadastro
        </h2>

        <input
          type="text"
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          name="name"
          placeholder="Nome"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name && (
          <div className="text-red-500">{errors.name}</div>
        )}

        <input
          type="password"
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          name="password"
          placeholder="Senha"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <div className="text-red-500">{errors.password}</div>
        )}
        <input
          type="password"
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          name="confirmPassword"
          placeholder="Confirme a Senha"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <div className="text-red-500">{errors.confirmPassword}</div>
        )}
        <input
          type="email"
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          name="email"
          placeholder="Email valido"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <div className="text-red-500">{errors.email}</div>
        )}       
        <div className="mt-4">
          Já possui cadastro?
          <Link
            className="text-purple-500 hover:text-orange-600 hover:underline hover:underline-offset-4"
            to="/"
          >
            Faça Login
          </Link>
        </div>

        <div>
          <Button
            type="submit"
            className="mt-4 bg-purple-500 hover:bg-orange-500 px-9 py-2 text-white uppercase rounded text-xs tracking-wider"
          >
            Cadastrar          
          </Button>
        </div>
      </form>
    </section>
  );
};
export { Register };
