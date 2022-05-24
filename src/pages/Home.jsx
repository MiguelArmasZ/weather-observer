import React, { useEffect } from 'react'
import { Form } from '../components/Form'

export const Home = () => {
  useEffect(() => {}, [])

  return (
    <>
      <section id='home' className='Home content'>
        <h1 className='Home-title'>The Weather Hunter</h1>
        <p className='Home-tagline'>
          mira el clima de cualquier ciudad del mundo
        </p>
        <Form />
        <div className='sun'></div>
      </section>
    </>
  )
}
