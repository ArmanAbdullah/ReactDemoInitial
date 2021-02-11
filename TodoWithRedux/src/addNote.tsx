import React,{ChangeEvent,useState,FC} from 'react';

interface NewNoteInputProps{
    addNewNote(note:string): void;
}
//AddNote:FC<NewNoteInputProps>=({addNewNote})=>
export const AddNote:FC<NewNoteInputProps>=({addNewNote})=>{
    const [note,setNote]=useState("");

    const updateNote=(event: ChangeEvent<HTMLInputElement>)=>{
        setNote(event.target.value)
    }
    
    const onAddNoteClick =()=>{
        addNewNote(note)
        setNote("");
    }

    return(
        <div>
    <input onChange={updateNote} value={note} type="text" name="note" placeholder="Note"/>
        <button onClick={onAddNoteClick} > Add Note</button>
    </div>
    )
}