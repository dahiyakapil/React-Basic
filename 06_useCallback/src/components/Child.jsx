import React from 'react'

const Child = ({ handleClick }) => {
    console.log("Child Component re renders")
    return (
        <>
            <button onClick={handleClick}>Click Child button</button>
        </>
    )
}

export default React.memo(Child)
