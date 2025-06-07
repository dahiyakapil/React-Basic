import React from 'react'
import { useState } from 'react'

const Forms = () => {
    const [firstname, setFirstname] = useState("");
    const [password, setPassword] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;

        if (name === 'firstname') {
            setFirstname(value)
        } else if (name === 'password') {
            setPassword(value)
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert(`${`firstname : ${firstname} and password : ${password} has been submitted`}`)
    }

    return (
        <>
            <h1>User Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname">First name</label>
                <input
                    name='firstname'
                    type="text"
                    placeholder='Enter your name'
                    value={firstname}
                    onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="password">Password</label>
                <input
                    name='password'
                    type="text"
                    placeholder='Enter password'
                    value={password}
                    onChange={handleChange} />

                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Forms
