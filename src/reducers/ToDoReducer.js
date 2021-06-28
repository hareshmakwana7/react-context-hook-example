import {Action} from "./ToDoAction";

export function reducer(state, action) {
    switch (action.type) {
        case Action.ADD_TODO:
            return [...state, action.payload];
        case Action.COMPLETE_TODO:
            return state.map(e => {
                    if (e.id === action.payload.id) {
                        e.complete = !e.complete;
                    }
                    return e;
                }
            );
        case Action.DELETE_TODO:
            return state.filter(e => e.id !== action.payload.id);
        default:
            return state;
    }
}
