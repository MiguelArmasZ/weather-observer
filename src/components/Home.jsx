import React, { useEffect } from 'react'
import { Form } from './Form'
import { addFade } from '../helpers/addFade'
import Hero from '../assets/hero.jpg'

export const Home = () => {
  useEffect(() => {
    addFade()
  }, [])

  return (
    <>
      <img
        className='Home-bg zoom zoom-1'
        src={Hero}
        alt='imagen de fondo'
      />
      <section id='home' className='Home content'>
        <h1 className='Home-title'>The Weather Hunter</h1>
        <p className='Home-tagline'>
          mira el clima de cualquier ciudad del mundo
        </p>
        <Form />
      </section>
    </>
  )
}
