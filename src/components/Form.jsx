/* eslint-disable space-before-function-paren */
import React from 'react'
import { useForm } from '../hooks/useForm'

export const Form = () => {
  const [city, handleChange, handleSubmit] = useForm({
    city: ''
  })

  return (
    <form className='Form' onSubmit={handleSubmit}>
      <label className='Form-label' htmlFor='city'>
        Busca una ciudad
      </label>
      <input
        onChange={handleChange}
        className='Form-input'
        id='city'
        name='city'
        type='text'
        placeholder='Paris...'
        autoComplete='off'
        value={city.city}
        required
      />
      <button className='Form-submit'>buscar</button>
    </form>
  )
}
