import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const SweetItem = () => {
  const [sweet, setSweet] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://bealun-mongo-api.herokuapp.com/dessert/${id}`)
      .then(res => res.json())
      .then(json => {
        console.log('My Item:', json)
        setSweet(json)
      })
  }, [id])

  return (
    <div>
      <Link className='goBack' to='/sweet'>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#000"><path d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm-1-17v4h8v2h-8v4l-6-5 6-5z" /></svg>
        <span>Go Back</span>
      </Link>
      <h1>{sweet.name}</h1>
    </div>
  )
}