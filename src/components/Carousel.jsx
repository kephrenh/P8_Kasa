import React, { useState } from 'react'

function Carousel({slides}) {

    const [currentIndex, setCurrentIndex] = useState(0)
    const length = slides.length

    // Image suivante
    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)

         // Retour à la première image quand fin de slide
         if(currentIndex === length - 1) {
            setCurrentIndex(0)
        }
    }

    // Image précédente
    const prevSlide = () => {
         setCurrentIndex(currentIndex - 1)

         // Retour à la dernière image quand début de slide
         if(currentIndex === 0) {
            setCurrentIndex(length - 1)
            
        }
    }

   // Parcourir l'objet slides pour identifier les images
    const images = slides.map((image, index) => {
      return (
          index === currentIndex && (
            <div key={index} className="carousel__banner"
            >
            <img
               src={image}
               alt="image logement"
               className='carousel__banner__image'
            />
         </div>
         )
      )
   })

   return (
      <div className='carousel'>
         {images}

         {/* Chevrons et compteur affichés uniquement quand nombre d'images > 1 */}
         {length > 1 && (<span className='carousel__count'>
            {currentIndex + 1}/{length}
         </span>
         )}

         {length > 1 && (<i
            className='fa-solid fa-chevron-left fa-5x
            carousel__chevron
            carousel__chevron--left'
            onClick={prevSlide}
         />
         )}
         
         {length > 1 && (<i
            className='fa-solid fa-chevron-right fa-5x
            carousel__chevron
            carousel__chevron--right'
            onClick={nextSlide}
         />)}
      </div>
   )

      
}



export default Carousel