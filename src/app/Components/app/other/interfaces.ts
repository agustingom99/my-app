export interface Usuario{
    ID: number,
    Nombre: string,
    Apellido: string,
    Nick: string,
    Email: string,
    Contraseña: string,
    tipo: UserType

}

export enum UserType{
    Administrador,
    Cliente,
    Tecnico
}

export interface LoginResponse{
    id: number
    name: string
    type: string
    dimension: string
    residents: Array<string>
    url: Array<string>
    created: string
}