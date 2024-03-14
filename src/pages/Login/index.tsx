import { Button } from "@/components/ui/button";
import { useFormik } from 'formik';
import { validationSchema, initialValues } from './form-schema/';
import { Link } from "react-router-dom";
import { useLoginService } from "@/Services/loginService";

const Login = () => {
  const { loginService } = useLoginService();

  const { handleSubmit, handleChange, handleBlur, errors, touched, values } = useFormik({
    initialValues, 
    validationSchema, 
    onSubmit: async (formData) => { 
      const { email, password: senha } = formData;
      try {
        await loginService({ email, senha });
      } catch (error) {
        console.error("Erro ao fazer login:", error);      
      }
    },
  });

  return (
    <>
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="/src/assets/logo.png"
            alt="Sample image"
          />
        </div>
        <form className="md:w-1/3 max-w-sm" onSubmit={handleSubmit}>
         <h2 className="mb-5 text-center text-4xl text-purple-500">Seja Bem-vindo(a)</h2>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Email"
            name="email" 
            value={values.email}
            onChange={handleChange} 
            onBlur={handleBlur} 
          />
          {errors.email && touched.email && ( 
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}

          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Senha"
            name="password" 
            value={values.password}
            onChange={handleChange} 
            onBlur={handleBlur}
          />
          {errors.password && touched.password && ( 
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
             
              <Link className="text-purple-500 hover:text-orange-600 hover:underline hover:underline-offset-4" to="../Register/index.tsx">Cadastre-se</Link>

            </div>
          </div>
          <div className="text-center md:text-left">
            <Button className="mt-4 bg-purple-500 hover:bg-orange-500 px-9 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">
              Acessar
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
