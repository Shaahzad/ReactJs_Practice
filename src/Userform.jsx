import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, updateEmail, updateName } from './Redux/User/UserSlice'

const Userform = () => {
const dispatch = useDispatch()
const {name, email, status} = useSelector((state) => state.User)

const HandleSubmit = (e) => {
    e.preventDefault()
    dispatch(addUser({name, email}))
}
  return (
    <div>
      <h1>Userform</h1>
      <form onSubmit={HandleSubmit}>
      <input type="text" placeholder='Name' value={name} onChange={(e) => dispatch(updateName(e.target.value))}/>
      <input type="email" placeholder='Email' value={email} onChange={(e) => dispatch(updateEmail(e.target.value))}/>
      <button type='submit'>Submit</button>
      {
        status === 'loading' && <h2>Loading...</h2>
      }
      {
        status === 'succeeded' && <h2>User Added Successfully</h2>
      }
      {
        status === 'failed' && <h2>Failed to Add User</h2>
      }
      </form>
    </div>
  )
}

export default Userform