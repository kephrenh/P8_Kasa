import React from 'react'

function Rating(props) {

   // Déclarer tableau pour le nombre total d'étoiles
   const notes = [1, 2, 3, 4, 5] 

   const score = props.score

   // Parourir le tableau 
   const rating = notes.map((note) => {
      return (
         // Afficher un nombre d'étoiles remplies correspondant à la note
         score >= note ? (
            <i
               key={note.toString()}
               className='fa-solid fa-star fa-star--filled'
               alt="star"
            />
               ) : (
                     // Afficher étoiles vides correspondant à la différence
                     <i
                     key={note.toString()}
                     className='fa-solid fa-star fa-star--empty'
                     alt="star"
            />
         )
      )
   })

   return (
      <>
      {rating}
      </>
   )
}

export default Rating