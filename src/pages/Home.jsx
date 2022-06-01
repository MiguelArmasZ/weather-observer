import React, { useEffect } from 'react'
import { Form } from '../components/Form'
import { animationRain } from '../helpers/animationRain'
import Logo from '../assets/mark.png'

export const Home = () => {
  useEffect(() => {
    animationRain()
  }, [])

  return (
    <>
      <section id='home' className='Home content'>
        <h1 className='Home-title'>The Weather Observer</h1>
        <p className='Home-tagline'>
          see the weather of any city in the world in real time
        </p>
        <Form />
        <div className='sun'></div>
      </section>
      <div className='mark'>
        <p>Developed by</p>
        <a
          href='https://mikecode.dev'
          target='_blank'
          rel='noreferrer'
        >
          <img src={Logo} alt='logo de mikecode.dev' />
        </a>
      </div>
    </>
  )
}
