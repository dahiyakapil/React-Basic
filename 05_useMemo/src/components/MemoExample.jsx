import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';


const MemoExample = () => {
    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(100);

    function sum() {
        setAdd(add+1)
    }

    function sub() {
       setMinus(minus - 1)
    }

    const muliply = useMemo(function multiplication() {
        console.log("Re-render multiply function *********")
        return add*10;
    }, [])

    return (
        <div>
            <h4>Value of add: {add}</h4>
            <button onClick={sum}>Addition</button>

            <h4>Value of sub: {minus}</h4>
            <button onClick={sub}>Subtract</button>

            <h4>Multiply: {muliply}</h4>            
        </div>
    )
}

export default MemoExample
