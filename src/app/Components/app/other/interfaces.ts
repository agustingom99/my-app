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