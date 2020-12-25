import React from 'react'

const GetUsersTable = ({ users }) => (
  <table className='usersTable'>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      {users.length > 0 ? (
        users.map(({ _id, firstname, lastname, email, username }) => (
          <tr key={_id}>
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{email}</td>
            <td>{username}</td>
          </tr>
        ))
      ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )
      }
    </tbody>
  </table>
)

export default GetUsersTable