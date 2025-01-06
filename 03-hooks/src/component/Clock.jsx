import { useEffect, useState } from 'react'
import '../css/Components.css'

export const Clock = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])
}
