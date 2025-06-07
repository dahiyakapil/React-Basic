import React, { useState } from 'react'

const Functional_state = () => {

    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
    }
    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={incrementCount}>Increment Count</button>
        </div>
    )
}

export default Functional_state
