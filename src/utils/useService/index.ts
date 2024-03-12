import axios from "axios";

export const useService = () => {
  const instance = axios.create();

  instance.interceptors.request.use((config) => {
    config.headers["Content-Type"] = "application/json";
    config.headers["Authorization"] = sessionStorage.getItem("@token") ?? "";
    return config;
  });

  const post = <Body = Record<string, unknown>, Response = unknown>(
    url: string,
    body?: Body
  ) => instance.post<Response>(url, body);

  const get = <Response = unknown>(url: string) => instance.get<Response>(url);
  
  const deleted = <Response = unknown>(url: string) => instance.delete<Response>(url);
  
  const update = <Body = Record<string, unknown>, Response = unknown>(
    url: string,
    body: Body
  ) => instance.put<Response>(url, body);

  return {
    post,
    get,
    deleted,
    update,
  };
};