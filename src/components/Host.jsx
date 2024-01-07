import React from 'react'

export default function Host({firstName, lastName, picture}) {
   
  return (
    <>
      <h2>
         <span>{firstName}</span>
         <span>{lastName}</span>
      </h2>
      <img src={picture} alt="Photo du logeur" />
   </>
)
}
