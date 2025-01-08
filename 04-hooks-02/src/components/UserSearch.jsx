import { useState, useEffect } from 'react'

export const UserSearch = () => {
  const users = ['John', 'Maria', 'Peter', 'Anna', 'Carlos']
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    const timeoutId = setTimeout(() => {}, 500)
  }, [searchTerm])

  return (
    <div>
      <h1 className="h1-title">User Search</h1>
      <input type="text" className="input-search" />
    </div>
  )
}
