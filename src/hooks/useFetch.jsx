import { useEffect, useState } from 'react'

export const useFetch = (place = 'sydney') => {
  const [state, setState] = useState({})

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        'X-RapidAPI-Key':
          '413e2cd9c5msh98b578d19e601eap13a61ejsndcdb28254f7e'
      }
    }

    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${place}`

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        const { location, current } = response
        const {
          name,
          country,
          localtime,
          region,
          tz_id: timeZone
        } = location
        const {
          condition,
          feelslike_c: tempFeel,
          is_day: moment,
          humidity,
          temp_c: temp,
          precip_mm: precip,
          wind_kph: wind
        } = current
        const { text, code } = condition

        setState({
          country,
          region,
          name,
          localtime,
          timeZone,
          tempFeel,
          moment,
          humidity,
          temp,
          precip,
          wind,
          text,
          code
        })
      })
      .catch((error) => setState({ error }))
  }, [])

  return state
}
