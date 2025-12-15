import { useEffect } from 'react'
// import { fetchUsers } from './Redux/User/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
const UserComponent = () => {
const dispatch = useDispatch()
const {users, loading, error} = useSelector((state) => state.User)
console.log(users)

useEffect(() => {
    dispatch(fetchUsers())
}, [dispatch])


if (loading) {
    return <h2>Loading...</h2>
}
if (error) {
    return <h2>Error: {error}</h2>
}
  return (
    <div>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.email}</li>
            ))}
        </ul>
    </div>
  )
}

export default UserComponent