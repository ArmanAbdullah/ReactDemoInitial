export type Action={type: "ADD_NOTE", payload: string}
| {type: "EDIT_NOTE", payload: string[]}
| {type: "DELETE_NOTE", payload: string}


export const CreateNote=(note:string): Action=>({
    type:"ADD_NOTE", payload:note
})

export const EditNote=(note:string, oldNote:string): Action=>({
    type:"EDIT_NOTE", payload:[note,oldNote]
})

export const DeleteNote=(note:string): Action=>({
    type:"DELETE_NOTE", payload:note
})