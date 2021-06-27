import React from "react";
import {Action} from "../../reducers/ToDoAction";

export default function ToDoList ({todo, dispatch}) {
    return (
        <>
            <span style={{color: todo.complete ? "#aaa" : "#000"}}>
                {todo.name}
            </span>
            <button type={"button"} onclick={() => dispatch({type: Action.COMPLETE_TODO, payload:{id: todo.id}})}>
                Complete
            </button>
            <button type={"button"} onclick={() => dispatch({type: Action.DELETE_TODO, payload:{id: todo.id}})}>
                Delete
            </button>
        </>
    )
}