import React from 'react'
import { useState, useEffect } from "react"

const Form = () => {
    const userData = { name: "", email: "", password: "" };

    const [inputdata, setInputData] = useState(userData);
    const [flag, setFlag] = useState(false)

    function handleChange(e) {
        setInputData({ ...inputdata, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputdata)
        if (!inputdata.name || !inputdata.email || !inputdata.password) {
            alert("All fields are required")
        } else {
            setFlag(true)
        }
    }

    useEffect(() => {
        console.log("Registered")
        return () => {
            console.log("cleanup")
        };
    }, [flag]);
    return (
        <div>
            <pre>{(flag) ? <h1>{inputdata.name}, You've registered successfully</h1> : ""}</pre>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name='name'
                    placeholder='Enter your name'
                    value={inputdata.name}
                    onChange={handleChange} />
                <input type="text"
                    name='email'
                    placeholder='Enter your email'
                    value={inputdata.email}
                    onChange={handleChange} />
                <input type="text"
                    name='password'
                    placeholder='Enter your password'
                    value={inputdata.password}
                    onChange={handleChange} />

                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form
