import React,{ChangeEvent,useState,FC,useEffect} from 'react';
import { INote } from './model';
import {initNote} from './App';

interface EditNoteInputProps{
    onSubmitSuccess: () => void;
    editNote(note:INote): void;
    noteToEdit:INote;
}
export const EditNote=(props: EditNoteInputProps)=>{
    console.log(props.noteToEdit)
    const [notee,setNotee]=useState(initNote);

    useEffect(() => {
        setNotee(props.noteToEdit);
    }, [])

    const updateNote=(event: ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=event.target
        const fieldValues={[name]:value}
        setNotee({
            ...notee,
            ...fieldValues
        })
    }
    
    const onEditNoteClick =()=>{
        props.editNote(notee)
        props.onSubmitSuccess();
        setNotee(initNote);
    }

    return(
        <div>
    <input onChange={updateNote} value={notee.text} type="text" name="text" placeholder="Note"/>
    <input onChange={updateNote} value={notee.writer} type="text" name="writer" placeholder="Note"/>
        <button onClick={onEditNoteClick} > Edit Note</button>
    </div>
    )
}