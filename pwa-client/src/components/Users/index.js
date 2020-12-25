import React, { useState, useEffect } from 'react'
import AddUserForm from './components/AddUserForm'
import UsersTable from './components/UsersTable'
import Posts from './Posts'
import axios from 'axios'
import './App.css'

const App = () => {

  const [users, setUsers] = useState([])

  useEffect(() => { getUsers() }, [])

  const getUsers = async () => {
    try {
      let result = await axios.get('/user/s')
      setUsers(result.data.users)
    } catch (error) {
      console.log(error)
    }
  }

  const addUser = async (user) => {
    try {
      let result = await axios.post('/user/signup', user)
      setUsers([...users, result.data.user])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='siteWrapper'>
      <h1>Users Management System</h1>

      <div className='flex-row'>
        <div className='flex-large'>
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} users={users} />
        </div>
      </div>

      <div className='flex-large'>
        <h2>Users</h2>
        <UsersTable users={users} />
      </div>
      <Posts />

    </div>
  )
}

export default App
