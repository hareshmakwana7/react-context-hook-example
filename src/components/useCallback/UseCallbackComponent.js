import React, {Component, useCallback, useState} from 'react';
import {List} from "./List";

export function UseCallbackComponent(props) {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    }, [number]);

    const theme = {
        background: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#333"
    }

    return (
     <div style={theme}>
         <input type="number" onChange={(e) => setNumber(parseInt(e.target.value))} value={number} />
         <br />

         <button type={"button"} onClick={() => setDark(prevDark => !prevDark)}>
             Toggle Theme
         </button>

         <List getItems={getItems} />
     </div>
    )
}