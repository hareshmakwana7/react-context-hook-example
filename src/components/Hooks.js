import React, {useEffect, useState} from 'react';


export default function Hooks (props) {
    const [count, setCount] = useState(0);

    // Similar to componentDidMount, componentWillUnmount  and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });
    return (
        <div>
            <h1>Total clicked {count}</h1>

            <br />

            <button type="button" onClick={() => setCount(count+1)}>
                Click me
            </button>
        </div>
    );
}