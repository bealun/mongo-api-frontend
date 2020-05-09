import React from 'react'
import { Link } from "react-router-dom"

import './style/FirstPage.css'

export const FirstPage = () => {
  return (
    <div className='firstPage'>
      {/* <h1>Test</h1> */}
      <Link className='saltyPage' to={'/salty'} >
        <p>Salty test</p>
      </Link>

      <Link className='sweetPage' to={'/sweet'} >
        <p>Sweet test</p>
      </Link>
    </div>

  )
}