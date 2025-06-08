import React from 'react'
import Profile from './Profile'

const User = () => {
    const user = {
        name: "Kapil Dahiya",
        age: 24,
        city: "Noida",
        country: "India"
    }
    return (
        <div>
            <h1>User INFO</h1>
            <Profile user={user} />

        </div>
    )
}

export default User
