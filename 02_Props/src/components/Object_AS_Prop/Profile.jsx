import React from 'react'

const Profile = ({ user }) => {
  return (
    <div>

      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.city}</p>
      <p>{user.country}</p>
    </div>
  )
}

export default Profile
