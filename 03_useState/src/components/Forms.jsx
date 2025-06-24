// import React from 'react'
// import { useState } from 'react'

// const Forms = () => {
//     const [firstname, setFirstname] = useState("");
//     const [password, setPassword] = useState("");

//     function handleChange(e) {
//         const { name, value } = e.target;

//         if (name === 'firstname') {
//             setFirstname(value)
//         } else if (name === 'password') {
//             setPassword(value)
//         }
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         alert(`${`firstname : ${firstname} and password : ${password} has been submitted`}`)
//     }

//     return (
//         <>
//             <h1>User Form</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="firstname">First name</label>
//                 <input
//                     name='firstname'
//                     type="text"
//                     placeholder='Enter your name'
//                     value={firstname}
//                     onChange={handleChange} />
//                 <br />
//                 <br />
//                 <label htmlFor="password">Password</label>
//                 <input
//                     name='password'
//                     type="text"
//                     placeholder='Enter password'
//                     value={password}
//                     onChange={handleChange} />

//                 <button type='submit'>Submit</button>
//             </form>
//         </>
//     )
// }

// export default Forms



import React from 'react'
import { useState } from 'react'

const Forms = () => {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handleChange(e) {
        const { name, value } = e.target;

        if (name === "firstName") {
            setFirstName(value)
        } else if (name === "email") {
            setEmail(value)
        } else if (name === "password") {
            setPassword(value)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        alert(`FristName: ${firstName}, Email: ${email}, Password: ${password} submitted successfully`)
    }



    return (
        <div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">FirstName</label>
                <input type="text" name='firstName' placeholder='Enter your first name' value={firstName} onChange={handleChange} /> <br />
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Enter your email' value={email} onChange={handleChange} /> <br />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='Enter your password' value={password} onChange={handleChange} /> <br />

                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default Forms
