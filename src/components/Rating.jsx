import React from 'react'

function Rating(props) {
      const notes = [1, 2, 3, 4, 5]
      const score = props.score
      const rating = notes.map((note) => {
         return (
            score >= note ? (
               <i
                  key={note.toString()}
                  className='fa-solid fa-star fa-star--filled'
                  alt="star"
               />
                  ) : (
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