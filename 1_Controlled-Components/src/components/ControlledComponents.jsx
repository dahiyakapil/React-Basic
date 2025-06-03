import { useState } from "react";



const Controlledomponents = () => {
    const [firstName, setFirstname] = useState("");

    function handleChange(e) {
        console.log(e.target.value);
        setFirstname(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert(`${firstName} submitted successfully`)
    }

    return (
        <>

            <form action="submit" onSubmit={handleSubmit}>
                <label htmlFor="name">Firstname</label>
                <input
                    type="text"
                    placeholder="firstName"
                    value={firstName}
                    onChange={handleChange}
                />

                <button type="submit">Submit</button>
            </form>

        </>
    )
}

export default Controlledomponents;