import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import './style/Details.css'

export const ItemSalty = () => {
  const [salty, setSalty] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://bealun-mongo-api.herokuapp.com/food/${id}`)
      .then(res => res.json())
      .then(json => {
        console.log('My Item:', json)
        setSalty(json)
      })
  }, [id])

  return (
    <div>
      <Link className='goBack' to='/salty'>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#000"><path d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm-1-17v4h8v2h-8v4l-6-5 6-5z" /></svg>
        <span>Go Back</span>
      </Link>
      <div className="detailWrapper">
        <img src={salty.img_url} alt={salty.name} />
        <div className="moreAbout">
          <h1>{salty.name}</h1>
          <h3>{salty.typeOf}</h3>
          <p>Time: {salty.time} minutes</p>
          <p>{salty.ingredients} ingredients</p>
          <a href={salty.recipe} target='_blank'>
            <button class="recipeLink">
              Read More
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}