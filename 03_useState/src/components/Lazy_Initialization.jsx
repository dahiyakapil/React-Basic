import React, { useState } from 'react'

const Lazy_Initialization = () => {

    function expensive() {
        console.log("Expensive function called !!!");
        return 10;
    }

    const [count, setCount] = useState(() => expensive());

    function handleClick() {
        setCount(count + 1)
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleClick}>Increment Count</button>
        </div>
    )
}

export default Lazy_Initialization;
