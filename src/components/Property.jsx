import React from 'react'

function Property({title, location}) {
  return (
    <>
        <h1>{title}</h1>
        <p>{location}</p>
    </>
  ) 
}

export default Property