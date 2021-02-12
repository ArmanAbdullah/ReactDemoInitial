import React,{ChangeEvent,useState,FC} from 'react';
import {initNote} from './App';
import { INote } from './model';

interface NewNoteInputProps{
    addNewNote(note:INote): void;
}
//AddNote:FC<NewNoteInputProps>=({addNewNote})=>
export const AddNote:FC<NewNoteInputProps>=({addNewNote})=>{
    const [note,setNote]=useState(initNote);

    const updateNote=(event: ChangeEvent<HTMLInputElement>)=>{
        //setNote(event.target.value)
        const { name, value } = event.target
        const fieldValues={[name]:value}
        setNote({
            ...note,
            ...fieldValues
        })
    }
    
    const onAddNoteClick =()=>{
        note.id= Math.random()
        addNewNote(note)
        setNote(initNote);
    }

    return(
        <div>
    <input onChange={updateNote} value={note.text} type="text" name="text" placeholder="Note"/>
    <input onChange={updateNote} value={note.writer} type="text" name="writer" placeholder="Note"/>
        <button onClick={onAddNoteClick} > Add Note</button>
    </div>
    )
}