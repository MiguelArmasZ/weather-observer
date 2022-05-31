import { useEffect, useState } from 'react'

export const useCountries = () => {
  const [countries, setCountries] = useState({})

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'minicountries.p.rapidapi.com',
        'X-RapidAPI-Key':
          '413e2cd9c5msh98b578d19e601eap13a61ejsndcdb28254f7e'
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
