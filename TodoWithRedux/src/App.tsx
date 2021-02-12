import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {NotesState} from './notesReducer';
import { AddNote } from './addNote';
import { useSelector,useDispatch } from 'react-redux';
import * as actions from './actions';
import { EditNote } from './editNote';
import { INote } from './model';

export const initNote :INote = {
  id : 0,
  text : "",
  writer : ""
}

interface AppProps{
  handleLogout:()=>void
}

const App=(props:AppProps) =>{
  const [isEdit, setIsEdit]=useState(false);
  const [notee, setNotee]=useState(initNote);
  const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes)
  const dispatch=useDispatch();

  const onAddNote=(note : INote)=>{
    dispatch(actions.CreateNote(note));
  }
  const onEditNote=(note : INote)=>{
    dispatch(actions.EditNote(note));
  }
  const onDeleteNote=(note : INote)=>{
    dispatch(actions.DeleteNote(note));
  }

  const handleEdit=(note: INote)=>{
    setNotee(note)
    setIsEdit(true)
  }

  return (
    <div className="App">
      {isEdit?
      <EditNote onSubmitSuccess={()=>setIsEdit(false)} editNote={onEditNote} noteToEdit={notee}/>:
    <AddNote addNewNote={onAddNote}/>}
    <hr/>
        <table>
          <tr>
            <th>Note Text</th>
            <th> Writer</th>
            <th> Action</th>
          </tr>
          {notes.map((note)=>
          <tr key={note.id}>
            <td>{note.text}</td>
            <td>{note.writer}</td>
            <td>
              <button onClick={ () => { handleEdit(note) } } >Edit</button>
              <button onClick={() => onDeleteNote(note)}>Delete</button>
            </td>
          </tr>
      )}
        </table>
    {/* <ul>
      {notes.map((note)=>
        <li key={note.id}>{note}
        <button onClick={ () => { handleEdit(note) } } >Edit</button>
        <button
        onClick={() => onDeleteNote(note)}>Delete</button>
        </li>
      )}
      
    </ul> */}
    </div>
  );
}

export default App;
