export interface INote{
    id: number;
    text: string;
    writer: string;
}

export interface IUser{
    id: number;
    email:string;
    password: string;
}

export const initUser: IUser={
    id:0,
    email:"",
    password:""
}