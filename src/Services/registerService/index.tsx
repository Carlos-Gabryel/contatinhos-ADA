
import { User } from "@/typagem";
import { ResponseError, ResponseUserSucess } from "./types/response"

const headers = new Headers();
headers.append("Content-type", "application/json");

export const userRegister = async (
    user: User 
): Promise<ResponseUserSucess & ResponseError> => {
    const response = await fetch("http://localhost:5000/v1/user", {
        body: JSON.stringify(user),
        method: "POST",
        headers,
    });
    return await response.json()
};