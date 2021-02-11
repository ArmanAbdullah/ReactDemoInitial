import * as actions from "../actions/actions";
const initialState = {
    list: []
}


export const movieReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case actions.ACTION_TYPES.GET_ALL:
            return {
                ...state,
                list: [...action.payload]
            }

        case actions.ACTION_TYPES.CREATE:
            return {
                ...state,
                list: [...state.list, action.payload]
            }

        // case actions.ACTION_TYPES.UPDATE:
        //     return {
        //         ...state,
        //         list: state.list.map(x => x.id == action.payload.id ? action.payload : x)
        //     }

        // case actions.ACTION_TYPES.DELETE:
        //     return {
        //         ...state,
        //         list: state.list.filter(x => x.id != action.payload)
        //     }
            
        default:
            return state
    }
}