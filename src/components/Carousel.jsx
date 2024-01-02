import React, { useState } from 'react'

function Carousel({slides}) {

    const [currentIndex, setCurrentIndex] = useState(0)
    const length = slides.length

    // Image suivante
    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === length - 1) {
            setCurrentIndex(0)
        }
    }

    // Image précédente
    const prevSlide = () => {
         setCurrentIndex(currentIndex - 1)
         if(currentIndex === 0) {
            setCurrentIndex(length - 1)
        }
    }

    const images = slides.map((image, index) => {
      return (
          index === currentIndex && (
               <img key={index} src={image} alt="Image logement"
               className={index === currentIndex ?
                  "carousel__banner__image carousel__banner__image--active"
                  : "carousel__banner__image"}
               />
            )
         )
          })

    if(!Array.isArray(slides) || slides.length <= 0) {
      return null
    }
    return (
         <div className='carousel'>
            <div className='carousel__banner'>
               {images}
               <i
                  className='fa-solid fa-chevron-left fa-5x
                  carousel__banner__chevron
                  carousel__banner__chevron--left'
                  onClick={prevSlide}
               />
               <i
                  className='fa-solid fa-chevron-right fa-5x
                  carousel__banner__chevron
                  carousel__banner__chevron--right'
                  onClick={nextSlide}
               />
               <span>
                  {currentIndex + 1}/{length}
               </span>
            </div>
         </div>
    )

      
}



export default Carousel