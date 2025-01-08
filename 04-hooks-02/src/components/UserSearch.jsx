import { useState, useEffect } from 'react'

export const UserSearch = () => {
  const users = ['John', 'Maria', 'Peter', 'Anna', 'Carlos']
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filtered = users.filter((user) => {
        return user.toLowerCase().includes(searchTerm.toLowerCase())
      })

      setResults(filtered)
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [searchTerm])

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    console.log(value)
  }

  return (
    <div>
      <h1 className="h1-title">User Search</h1>
      <input type="text" className="input-search" onChange={handleSearch} />
    </div>
  )
}
