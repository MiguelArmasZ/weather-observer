/* eslint-disable space-before-function-paren */
/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { Spinner } from '../components/Spinner'
import { conditionWeather } from '../data/conditionWeather'
import { useFetch } from '../hooks/useFetch'
import {
  faTemperatureFull,
  faDroplet,
  faCloudRain,
  faWind,
  faStar
} from '@fortawesome/free-solid-svg-icons'
import { activeSpinner } from '../helpers/activeSpinner'
import { addActiveClass } from '../helpers/addActiveClass'
import { intlClock } from '../helpers/intlClock'

export const City = () => {
  const [time, setTime] = useState('')

  const { city } = JSON.parse(window.localStorage.getItem('city'))

  const place = useFetch(city)
  const {
    country,
    region,
    name,
    timeZone,
    tempFeel,
    moment,
    humidity,
    temp,
    precip,
    wind,
    text,
    code
  } = place

  useEffect(() => {
    if (timeZone) {
      setInterval(() => {
        setTime(intlClock(timeZone))
      }, 1000)
    }
  }, [timeZone])

  useEffect(() => {
    activeSpinner()
  }, [])

  const conditions = {
    bgLayout: () => (moment === 0 ? 'bg-night' : 'bg-day'),
    bgItems: () => (moment === 0 ? 'bg-dark-blue' : 'bg-sky-blue'),
    dayMoment: () =>
      moment === 0
        ? conditionWeather[code]?.night
        : conditionWeather[code]?.day
  }

  const { bgLayout, bgItems, dayMoment } = conditions

  return (
    <>
      <div className={`bg ${bgLayout()}`}></div>
      {place.error ? (
        <div div className='City-mssg-error'>
          <p>Lo sentimos, no podemos encontrar esa ciudad</p>
          <Link to='/'>Volver a intentarlo</Link>
        </div>
      ) : (
        <section className='fade'>
          <div className='City-title'>
            <h2 className='City-name'>{name}</h2>
            <h3 className='City-region'>
              {region}, {country}
            </h3>
            <span
              onClick={() =>
                addActiveClass('.City-favorite', 'active')
              }
              className='City-favorite'
            >
              <Icon icon={faStar} />
            </span>
          </div>

          <div className='City-temp'>
            <div className=''>
              <img
                className='City-condition'
                src={dayMoment()}
                alt='condition weather'
              />
              <h4>{temp}</h4>
              <p className='City-text'>{text}</p>
              <p className='City-watch'>{time}</p>
            </div>

            <ul className='City-info'>
              <li className={`City-info-item ${bgItems()}`}>
                <Icon icon={faTemperatureFull} />
                {`${tempFeel} º`}
              </li>
              <li className={`City-info-item ${bgItems()}`}>
                <Icon icon={faDroplet} />
                {`${humidity} %`}
              </li>
              <li className={`City-info-item ${bgItems()}`}>
                <Icon icon={faCloudRain} />
                {`${precip} mm`}
              </li>
              <li className={`City-info-item ${bgItems()}`}>
                <Icon icon={faWind} />
                {`${wind} kph`}
              </li>
            </ul>
          </div>
          <div className='spinner'>
            <Spinner />
          </div>
        </section>
      )}
    </>
  )
}
