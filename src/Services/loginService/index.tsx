import { Login } from "../../typagem";
import { useService } from "../../utils";
import { ErrorResponse, LoginResponseSuccess } from "./types/response";

export const useLoginService = () => {
  const { post } = useService();

  const loginService = async (
    login: Login
  ): Promise<LoginResponseSuccess & ErrorResponse> => {
    try {
      const response = await post<Login>("http://localhost:5000/v1/auth", login);
      return response.data as LoginResponseSuccess & ErrorResponse;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error; 
    }
  };

  return {
    loginService
  }
};
