import React,{ChangeEvent,useState,FC,useEffect} from 'react';

interface EditNoteInputProps{
    onSubmitSuccess: () => void;
    editNote(note:string): void;
    noteToEdit:string;
}
export const EditNote=(props: EditNoteInputProps)=>{
    console.log(props.noteToEdit)
    const [notee,setNotee]=useState("");

    useEffect(() => {
        setNotee(props.noteToEdit);
    }, [])

    const updateNote=(event: ChangeEvent<HTMLInputElement>)=>{
        setNotee(event.target.value)
        console.log(notee)
    }
    
    const onEditNoteClick =()=>{
        props.editNote(notee)
        props.onSubmitSuccess();
        setNotee("");
    }

    return(
        <div>
    <input onChange={updateNote} value={notee} type="text" name="note" placeholder="Note"/>
        <button onClick={onEditNoteClick} > Edit Note</button>
    </div>
    )
}