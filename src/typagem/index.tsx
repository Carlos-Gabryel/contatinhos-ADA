export type User = {
    name: string
    email: string
    password?: string   
    token?: string
}

export type Login = {
    email: string
    senha: string
}