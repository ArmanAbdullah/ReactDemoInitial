import { notesReducer, NotesState } from './notesReducer';
import {createStore} from 'redux';
import { Action } from './actions';


export const store=createStore(notesReducer);