import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(count + 1)
    }
    function decrementCount() {
        setCount(count - 1)
    }

    useEffect(() => {
        console.log('Component Mounted')

        return () => {
        console.log('Cleanup before next effect run');
    }
    }, [count])

    return (
        <>
            <h3>Count : {count}</h3>
            <button onClick={incrementCount}>Increase the count</button>
            <button onClick={decrementCount}>Decrease the count</button>
        </>
    )
}

export default Counter
