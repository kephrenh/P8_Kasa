import React, { useState } from 'react'




export default function Collapse({title, content}) {

  // Position initiale avec hook useState
  const [isOpen, setIsOpen] = useState(false)

  // Affichage du contenu
  const display = () => {
    setIsOpen(!isOpen)
  }

   // Classes en fonction de l'affichage du contenu
   const contentClass = (isOpen ?
      "visible" : "hidden") + " dropdown__content";

   const chevronClass = (isOpen ?
      "fa-chevron-up chevron rotate" : "fa-chevron-up chevron") + " fa-solid";

   const titleClass = (isOpen ?
      "visible" : "") + " dropdown__title";
   
      const dropdownClass = (isOpen ?
      "visible" : "hidden") + " dropdown";

   

  return (
      <section className={dropdownClass}>
         <p className={titleClass}>
            <span>{title}</span>
            <i className={chevronClass} onClick={display} />
         </p>
         <div className={contentClass}>
            {content}
         </div>
      </section>
   )
}
