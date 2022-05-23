/* eslint-disable space-before-function-paren */
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../DataContext'

export const useForm = (initialValue) => {
  const { setCity } = useContext(DataContext)
  const [field, setField] = useState(initialValue)

  const navigate = useNavigate()

  function handleChange(e) {
    setField({
      ...field,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setCity(field)
    setField(initialValue)
    navigate('/city')
  }

  return [field, handleChange, handleSubmit]
}
