import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {NotesState} from './notesReducer';
import { AddNote } from './addNote';
import { useSelector,useDispatch } from 'react-redux';
import * as actions from './actions';
import { EditNote } from './editNote';
import { INote } from './model';


function App() {
  const [isEdit, setIsEdit]=useState(false);
  const [notee, setNotee]=useState("");
  const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes)
  const dispatch=useDispatch();

  const onAddNote=(note : string)=>{
    dispatch(actions.CreateNote(note));
  }
  const onEditNote=(note : string)=>{
    dispatch(actions.EditNote(note,notee));
  }
  const onDeleteNote=(note : string)=>{
    dispatch(actions.DeleteNote(note));
  }

  const handleEdit=(note: string)=>{
    setNotee(note)
    setIsEdit(true)
  }

  return (
    <div className="App">
      {isEdit?
      <EditNote onSubmitSuccess={()=>setIsEdit(false)} editNote={onEditNote} noteToEdit={notee}/>:
    <AddNote addNewNote={onAddNote}/>}
    <hr/>
    <ul>
      {notes.map((note)=>
        <li key={note}>{note}
        <button onClick={ () => { handleEdit(note) } } >Edit</button>
        <button
        onClick={() => onDeleteNote(note)}>Delete</button>
        </li>
      )}
      
    </ul>
    </div>
  );
}

export default App;
