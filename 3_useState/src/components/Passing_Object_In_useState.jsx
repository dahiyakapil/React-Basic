import React, { useState } from 'react'

const Passing_Object_In_useState = () => {
    const [allvalues, setAllValues] = useState({ firstName: "Kapil", lastName: "Dahiya", city: "Noida", country: "India" })

    const handleClick = () => {
        setAllValues({ ...allvalues, firstName: "John", city: "Gurugram" })
    }


    return (
        <div>
            <p>My firstname is {allvalues.firstName} and lastname is {allvalues.lastName} from city  {allvalues.city} and country is {allvalues.country}</p>
            <button onClick={handleClick}>Update User Data</button>
        </div>
    )
}

export default Passing_Object_In_useState
