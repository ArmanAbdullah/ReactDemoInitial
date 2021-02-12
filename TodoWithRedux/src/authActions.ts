import { IUser } from "./model";

export type AuthAction={
    type: "LOGIN"
    payload: IUser
}
|
{
    type: "LOGOUT"
    payload: IUser
}
|
{
    type: "SIGNUP"
    payload: IUser
}

export const CreateNote=(note:INote): Action=>({
    type:"ADD_NOTE", payload:note
})
export const loginAction=(user:IUser):AuthAction=>{
    type: "LOGIN"
    payload: user
}
export const logoutAction=(user:IUser):AuthAction=>{
    type: "LOGOUT"
    payload: user
}
export const SignUpAction=(user:IUser):AuthAction=>{
    type: "SIGNUP"
    payload: user
}