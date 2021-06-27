import {Action} from "./ToDoAction";

export default function reducer (state, action) {
    switch (action.type) {
        case Action.ADD_TODO:
            return [...state, action.payload];
        case Action.COMPLETE_TODO:
            return [{...state, complete: !action.payload.complete}];
        case Action.DELETE_TODO:
            return state.filter(e => e.id === action.payload.id);
        default:
            return state;
    }
}