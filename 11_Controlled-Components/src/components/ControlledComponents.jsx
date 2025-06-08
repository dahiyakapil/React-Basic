import React from 'react'
import { useState } from 'react'

const ControlledComponents = () => {
    const [firstName, setFirstName] = useState("");

    function handleChange(e) {
        setFirstName(e.target.value)

    }

    function handleSubmit(e) {
        e.preventDefault();
        alert(`${firstName} submitted successfully`)
    }
    return (
        <>
            <p>{firstName}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor='firstName'>FirstName</label>
                <input
                    type="text"
                    placeholder='Enter your first Name'
                    value={firstName}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>

        </>
    )
}

export default ControlledComponents
