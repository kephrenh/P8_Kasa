import React, { useState } from 'react'




export default function Collapse({title, content}) {

  // Position initiale avec hook useState
  const [isOpen, setIsOpen] = useState(false)

  // Affichage du contenu
  const display = () => {
    setIsOpen(!isOpen)
  }

   const contentClass = (isOpen ?
      "visible" : "hidden") + " dropdown__content";

   const chevronClass = (isOpen ?
      "fa-chevron-up chevron rotate-down" : "fa-chevron-up chevron") + " fa-solid";

  return (
      <section className='dropdown'>
         <p className='dropdown__title'>
            <span>{title}</span>
            <i className={chevronClass} onClick={display} />
         </p>
         <div className={contentClass}>{content}</div>
         
      </section>
   )
}
