import React from 'react'
import { useState } from 'react'
import Child from './Child';
import { useCallback } from 'react';

const Parent = () => {
    const [count, setCount] = useState(0);
    const [subtract, setSubtract] = useState(100)

    function incrementCount() {
        setCount((prev) => prev + 1)
    }

    function decrement(){
        setSubtract((prev) => prev - 1)
    }

    const handleClick = useCallback(() => {
        console.log("Button Clicked");
    }, [subtract])
    return (
        <>
            <button onClick={incrementCount}>Increment Count</button> {count} <br />
            <button onClick={decrement}>Decrement Count</button> {subtract} <br />
            <Child handleClick={handleClick} />
        </>
    )
}

export default Parent
