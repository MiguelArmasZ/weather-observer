/* eslint-disable space-before-function-paren */
/* eslint-disable multiline-ternary */
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { Spinner } from '../components/Spinner'
import { conditionWeather } from '../data/conditionWeather'
import { useFetch } from '../hooks/useFetch'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { activeSpinner } from '../helpers/activeSpinner'
import { intlClock } from '../helpers/intlClock'
import { addToFavoriteList } from '../helpers/addToFavoriteList'
import { checkFavoriteItem } from '../helpers/checkFavoriteItem'
import { Modal } from '../components/Modal'
import { DataContext } from '../DataContext'
import { dataCondition } from '../data/dataCondition'

export const City = () => {
  const { modal, setModal, setModalInfo } = useContext(DataContext)
  const [time, setTime] = useState('')
  const navigate = useNavigate()
  const cityLS = window.localStorage.getItem('city') || false
  const { city } = JSON.parse(cityLS)
  const cityText = document.querySelector('.City-name')

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
    if (!city) {
      return navigate('/')
    }
  }, [])

  useEffect(() => {
    if (timeZone) {
      setInterval(() => {
        setTime(intlClock(timeZone))
      }, 1000)
    }
  }, [timeZone])

  useEffect(() => {
    checkFavoriteItem(city?.toLowerCase())
    activeSpinner()
  }, [])

  useEffect(() => {
    const favoritesArr = window.localStorage.getItem('favorites')

    if (!favoritesArr) {
      window.localStorage.setItem('favorites', JSON.stringify([]))
    }
  }, [])

  function handleModal(modal) {
    setModal(true)
    setModalInfo(modal)
  }

  const conditions = {
    bgLayout: () => (moment === 0 ? 'bg-night' : 'bg-day'),
    bgItems: () => (moment === 0 ? 'bg-dark-blue' : 'bg-sky-blue'),
    dayMoment: () =>
      moment === 0
        ? conditionWeather[code]?.night
        : conditionWeather[code]?.day
  }

  const { bgLayout, bgItems, dayMoment } = conditions

  useEffect(() => {
    if (cityText !== city && cityText !== null) {
      window.location.reload()
    }
  }, [city])

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
              onClick={() => {
                addToFavoriteList(city)
              }}
              className='City-favorite'
            >
              <Icon icon={faStar} />
            </span>
          </div>

          <div className='City-temp'>
            <div>
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
              {dataCondition.map((data, i) => {
                const dataFetch = [tempFeel, humidity, precip, wind]
                const { icon, symbol, modal } = data
                return (
                  <li
                    onClick={() => handleModal(modal)}
                    key={i}
                    className={`City-info-item ${bgItems()}`}
                  >
                    <Icon icon={icon} />
                    {`${dataFetch[i]} ${symbol}`}
                  </li>
                )
              })}
            </ul>
            {modal && <Modal />}
          </div>
          <div className='spinner'>
            <Spinner />
          </div>
        </section>
      )}
    </>
  )
}
