import React from 'react'

export default function Host({name, picture}) {
   
  return (
    <>
      <h2>{name}</h2>
      <img src={picture} alt={name + " picture"} />
   </>
)
}
