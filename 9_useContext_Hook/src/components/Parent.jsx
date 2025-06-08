import React from 'react'
import ChildA from './ChildA';
import { UserContext } from '../Context/UserContext';


const Parent = () => {
    // const name = "Kapil";
    // const city = "Noida"
    // We can pass the object also

    const user = {
        name:"Kapil",
        city: "Noida"
    }
    return (
        <div>
            <UserContext value={user}>
                <ChildA />
            </UserContext>

        </div>
    )
}

export default Parent
