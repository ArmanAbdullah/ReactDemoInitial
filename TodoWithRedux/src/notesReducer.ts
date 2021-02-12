import { Action } from "./actions"
import { INote } from "./model";

export interface NotesState {
    notes: INote[]
}
const initialState = {
    notes: []
}

export const notesReducer = (state: NotesState = initialState, action: Action) => {
    let ret: NotesState = state;
    switch (action.type) {
        case "ADD_NOTE": {
            ret = { 
                ...state, 
                notes: [...state.notes, action.payload] }
            break;
        }
        case "EDIT_NOTE": {
            debugger
            ret = {
                ...state,
                notes: state.notes.map(x => (x.id == action.payload.id) ? action.payload : x)
            }
            break;
        }
        case "DELETE_NOTE": {
            ret = {
                ...state,
                notes: state.notes.filter(x => x.id != action.payload.id)
            }
            break;
        }
    }
    return ret;
}