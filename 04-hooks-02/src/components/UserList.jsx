import { useState, useEffect } from 'react'

export const UserList = () => {
  const [users, setUsers] = useState([])
  const [loanding, setLoanding] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((e) => console.error('Error fetching users:', error))
      .finally(() => setLoanding(false))
  }, [])

  const ifLoanding = () => {
    if (loanding) return <p>Loanding...</p>
  }

  return (
    <div>
      <h1 className="h1-title">User List</h1>
      {ifLoanding()}
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  )
}
