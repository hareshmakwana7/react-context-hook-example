import React, {useReducer, useState} from "react";
import {reducer} from "../../reducers/ToDoReducer";
import {Action} from "../../reducers/ToDoAction";
import ToDoList from "./ToDoList";


export function UseReducerComponent() {
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: Action.ADD_TODO, payload: {id: Date.now(), name: name, complete: false}});
        setName('');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type={"text"} value={name} onChange={(e) => setName(e.target.value)}/>
                <button type={"submit"}>
                    Add todo
                </button>
            </form>
            {state.map(todo => {return <ToDoList todo={todo} dispatch={dispatch} key={todo.id} />} )}
        </>
    )
}
