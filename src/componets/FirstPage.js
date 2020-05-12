import React from 'react'
import { Link } from "react-router-dom"

import './style/FirstPage.css'

export const FirstPage = () => {
  return (
    <div className='firstPage'>
      <Link className='saltyPage' to={'/salty'} >
        <p>Salty</p>
      </Link>

      <Link className='sweetPage' to={'/sweet'} >
        <p>Sweet</p>
      </Link>
    </div>

  )
}