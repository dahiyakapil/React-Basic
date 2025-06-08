import React, { useState } from 'react'

const Child = (props) => {
    const [name, setName] = useState("");

    function handleChange(e){
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault(); // Prevents page refresh
        props.getData(name); // Calls function passed by Parent with 'name'

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='Search here'
                    value={name}
                    onChange={handleChange} />
            </form>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Child
