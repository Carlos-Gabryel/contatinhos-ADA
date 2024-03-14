type Base64 = string;

export type ResponseError = {
    mensagem: string;
    status: number;
};

export type ResponseUserSucess = {
    data: {
        id: string;
        email: string;
        nome: string;
        foto: Base64;
    };
    status: number;
};