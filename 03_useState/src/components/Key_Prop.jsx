import React from 'react'

const Key_Prop = () => {

    const users = [

        { id: 1, name: "Kapil" },
        { id: 2, name: "James" },
        { id: 3, name: "Rock" }

    ]


    return (
        <div>
            <ul>
                {users.map((user) => {
                   return <li key={user.id}>{user.name}</li>
                })}
            </ul>
        </div>
    )
}

export default Key_Prop
