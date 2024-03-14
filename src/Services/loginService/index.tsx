import { Login } from "../../typagem";
import { useService } from "@/utils/useService";
import { ErrorResponse, LoginResponseSuccess } from "./types/response";

export const useLoginService = () => {
  const { post } = useService();

  const loginService = async (
    login: Login
  ): Promise<LoginResponseSuccess & ErrorResponse> => {
    const response = await post<Login>("http://localhost:5000/v1/auth", login);
    return response.data;
  };

  return {
    loginService
  }
};