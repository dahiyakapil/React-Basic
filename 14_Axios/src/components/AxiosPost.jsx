import axios from 'axios';
import React, { useState } from 'react';

const AxiosPost = () => {
    const data = { firstName: "", lastName: "", email: "" };

    const [inputdata, setInputData] = useState(data);

    function handleChange(e) {
        setInputData({ ...inputdata, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/users", inputdata);
            console.log(response.data);
            alert(`${inputdata.firstName} ${inputdata.lastName} with ${inputdata.email} registered successfully`);

            setInputData(data);
        } catch (error) {
            console.error("Error during POST request:", error);
            alert("Something went wrong. Please try again.");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your firstname"
                    value={inputdata.firstName}
                    onChange={handleChange}
                    required
                /> <br />

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your lastname"
                    value={inputdata.lastName}
                    onChange={handleChange}
                    required
                /> <br />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={inputdata.email}
                    onChange={handleChange}
                    required
                /> <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AxiosPost;
