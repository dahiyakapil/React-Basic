// import React from 'react'
// import { useMemo } from 'react';
// import { useState } from 'react'
// import Child from './Child';

// const Parent = () => {
//     const [add, setAdd] = useState(0);
//     const [minus, setMinus] = useState(100);

//     function addition() {
//         setAdd(add + 1);
//     }

//     function substraction() {
//         setMinus(minus - 1)
//     }

//     const memoizedValue = useMemo(function heavyCal() {
//         console.log("Heavy Cal re-renders")
//         let result = 0;
//         for (let i = 0; i < 1000000; i++) {
//             result = result + i
//         }
//         return result + add;
//     }, [add])
//     return (
//         <div>
//             <p>Memoized Value: {memoizedValue}</p>
//             <button onClick={addition}>Addtion</button> {add}
//             <br />
//             <button onClick={substraction}>Subtraction</button> {minus}

//             <Child memoizedValue = {memoizedValue}/>
//         </div>
//     )
// }

// export default Parent;


import React, { useState } from 'react'
import { useMemo } from 'react';
import Child from './Child';

const Parent = () => {
    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(100);

    function addition() {
        setAdd(add + 1);
    }

    function subtraction() {
        setMinus(minus - 1);
    }

    const memoizedValue = useMemo(function heavyCalcualtion() {
        console.log("Heavy Calculation Function Renders Unneccersily")
        let result = 0;
        for (let i = 0; i < 1000000; i++) {
            result += i;
        }

        return result + add;
    }, [add])

    return (
        <div>
            <button onClick={addition}>Add</button> {add} <br />
            <button onClick={subtraction}>Minus</button> {minus}
            <br />

            {memoizedValue}

            <Child memoizedValue={memoizedValue}/>

        </div>
    )
}

export default Parent
