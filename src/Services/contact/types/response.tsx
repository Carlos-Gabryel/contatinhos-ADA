import { Contact } from "../../../typagem/index";

export type ErrorResponse = {
  mensagem: string;
  status: number;
};

export type GetContactSuccess = {
  data: Contact[];
  status: number;
};

