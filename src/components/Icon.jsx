import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = ({ class$ = '', icon }) => {
  return <FontAwesomeIcon className={class$} icon={icon} />
}
