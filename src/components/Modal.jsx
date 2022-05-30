/* eslint-disable space-before-function-paren */
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react'
import { DataContext } from '../DataContext'
import { Icon } from './Icon'

export const Modal = () => {
  const { setModal, modalInfo } = useContext(DataContext)

  function handleModal() {
    setModal(false)
  }

  return (
    <section className='modal fade'>
      <div className='content'>
        <h2>{modalInfo.heading}</h2>
        <p>{modalInfo.description}</p>
      </div>
      <span onClick={handleModal}>
        <Icon class$='modal-icon' icon={faArrowRightFromBracket} />
      </span>
    </section>
  )
}
