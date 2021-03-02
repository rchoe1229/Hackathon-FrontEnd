import React from 'react'
import "./Card.css"

export default function Card({crypto}) {
  const {name, price_usd} = crypto

  
  return (
    <li className="cryptoCard-container">
      <div className="cryptoCard">
        <div className="card">
          <h2>{name}</h2>
          <p>${price_usd}</p>
        </div>
      </div>
    </li>
  )
}
