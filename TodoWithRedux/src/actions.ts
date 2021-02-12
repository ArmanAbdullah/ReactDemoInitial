import { INote } from "./model"

export type Action={type: "ADD_NOTE", payload: INote}
| {type: "EDIT_NOTE", payload: INote}
| {type: "DELETE_NOTE", payload: INote}


export const CreateNote=(note:INote): Action=>({
    type:"ADD_NOTE", payload:note
})

export const EditNote=(note:INote): Action=>({
    type:"EDIT_NOTE", payload:note
})

export const DeleteNote=(note:INote): Action=>({
    type:"DELETE_NOTE", payload:note
})