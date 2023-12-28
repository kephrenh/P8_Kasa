import React from 'react'
import { Link } from 'react-router-dom'

function HomeMainFig(props) {

  const Figure = () => {
    return (
      <figure className="main__housing">
              <Link
              className='main__housing__link'
              to="/housing">
                  <img src={props.cover} alt={props.title} className='main__housing__link__img' />
                  <figcaption className="main__housing__link__title">
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

export default HomeMainFig