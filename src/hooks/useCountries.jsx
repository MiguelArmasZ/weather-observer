import { useEffect, useState } from 'react'

export const useCountries = () => {
  const [countries, setCountries] = useState({})

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'minicountries.p.rapidapi.com',
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_KEY
      }
    }

    const url = 'https://minicountries.p.rapidapi.com/nations'

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        setCountries(result)
      })
  }, [])

  return countries
}
