import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {

  const Figure = () => {

    return (
      <figure className="card">
              <Link
              className='card__link'
              to={props.link}>
                  <img src={props.cover} alt={props.title} className='card__link__img' />
                  <figcaption className="card__link__title">
                      {props.title}
                  </figcaption>
              </Link>
      </figure>
    )
  }


  return (
    <Figure />
  )
}

