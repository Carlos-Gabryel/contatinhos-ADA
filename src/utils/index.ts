import axios from "axios";

export const useService = () => {
  const instance = axios.create();
  const token = sessionStorage.getItem("token");

  instance.interceptors.request.use((config) => {
    config.headers["Content-Type"] = "application/json";
    config.headers["Authorization"] = token;
    return config;
  });

  const post = <Body = Record<string, unknown>, Response = unknown>(
    url: string,
    body?: Body
  ) => instance.post<Response>(url, body);

  const patch = <Body = Record<string, unknown>, Response = unknown>(
    url: string,
    body?: Body
  ) => instance.patch<Response>(url, body);

  const get = <Response = unknown>(url: string) => instance.get<Response>(url);

  const del = <Body = Record<string, unknown>, Response = unknown>(
    url: string,
    body?: Body
  ) => instance.delete<Response>(url, {
    data: body
  });

  return {
    post,
    get,
    del,
    patch
  };
};