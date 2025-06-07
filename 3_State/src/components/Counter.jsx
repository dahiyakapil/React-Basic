import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(count + 1);
    }

    function decrementCount() {
        setCount(count - 1)
    }
    return (
        <div>

            <h1>State in React</h1>
            <h4>Value of Count : {count}</h4>
            <button onClick={incrementCount}>Increment Count</button>
            <button onClick={decrementCount}>Decrement Count</button>

        </div>
    )
}

export default Counter;
