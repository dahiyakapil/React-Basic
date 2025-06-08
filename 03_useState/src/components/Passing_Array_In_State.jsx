import React, { useState } from 'react'

const Passing_Array_In_State = () => {

    const [items, setItems] = useState(["Samsung", "Iphone"])

    const handleCLick = () => {
        setItems([...items, "MacBook"]) // spread operator creates the copy of the array and Macbook will be added to the array
    }

    return (
        <div>
            <button onClick={handleCLick}>Add Item in Array</button>

            <ul>
                {
                    items.map((val, index) => {
                        return <li key={index}>{val}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Passing_Array_In_State
