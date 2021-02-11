import { Action } from "./actions"

export interface NotesState {
    notes: string[]
}
const initialState = {
    notes: []
}

export const notesReducer = (state: NotesState = initialState, action: Action) => {
    let ret: NotesState = state;
    switch (action.type) {
        case "ADD_NOTE": {
            ret = { ...state, notes: [...state.notes, action.payload] }
            break;
        }
        case "EDIT_NOTE": {
            debugger
            ret = {
                ...state,
                notes: state.notes.map(x => (x == action.payload[1]) ? action.payload[0] : x)
            }
            break;
        }
        case "DELETE_NOTE": {
            ret = {
                ...state,
                notes: state.notes.filter(x => x != action.payload)
            }
            break;
        }
    }
    return ret;
}