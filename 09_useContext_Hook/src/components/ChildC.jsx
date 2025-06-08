import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

const ChildC = () => {
    // const {name, city} = useContext(UserContext)
    const user = useContext(UserContext) // using user object
  return (
    <div>
      <h1>My name is {user.name} and city is {user.city}</h1>
    </div>
  )
}

export default ChildC
