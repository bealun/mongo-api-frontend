import React from 'react'
import { Link } from "react-router-dom";
// import { Salty } from './Salty'

export const FirstPage = () => {
  return (
    <div>
      <h1>Test</h1>
      <Link to={'/salty'} >
        <p>Testing again</p>
      </Link>
    </div>

  )
}