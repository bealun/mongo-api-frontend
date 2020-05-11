import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Sweet = () => {
  const [sweetThings, setSweetThings] = useState([])

  useEffect(() => {
    fetch(`https://bealun-mongo-api.herokuapp.com/dessert`)
      .then(res => res.json())
      .then(json => {
        console.log('Items:', json)
        setSweetThings(json)
      })
  }, [])

  return (
    <section>
      <Link className='goBack' to='/'>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#000"><path d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm-1-17v4h8v2h-8v4l-6-5 6-5z" /></svg>
        <span>Go Back</span>
      </Link>

      <div className="contentWrapper">
        {sweetThings.map(item => (
            <div className="eachFood" key={item.typeOf}>
              <Link to={`/sweet/${item._id}`}>
              <img src={item.img_url} alt='foods' />
              <h4>{item.name}</h4>
              </Link>
            </div> 
        ))}
      </div>
    </section>
  )
}