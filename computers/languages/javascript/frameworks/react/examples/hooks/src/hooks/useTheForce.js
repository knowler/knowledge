import { useState, useEffect } from 'react'

export const useTheForce = (characterId) => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    setLoading(true)
    fetch(`https://swapi.co/api/people/${characterId}`)
      .then(response => response.json())
      .then(data => {
        setData(data)
        setError(undefined)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [characterId])

  return [
    data,
    isLoading,
    error,
  ]
}
