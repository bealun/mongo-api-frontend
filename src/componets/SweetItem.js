import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import './style/Details.css'

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
    <div className="contentDetail">
      <Link className='goBack' to='/sweet'>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#000"><path d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm-1-17v4h8v2h-8v4l-6-5 6-5z" /></svg>
        <span>Go Back</span>
      </Link>
      <div className="detailWrapper">
        <img src={sweet.img_url} alt={sweet.name} />
        <div className="moreAbout">
          <h1>{sweet.name}</h1>
          <h3>{sweet.typeOf}</h3>
          <p>Time: {sweet.time} minutes</p>
          <p>{sweet.ingredients} ingredients</p>
          <a href={sweet.recipe} target='_blank'>
            <button class="recipeLink">
              Read More
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}