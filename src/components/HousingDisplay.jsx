import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import database from './database'
import Tag from './Tag'
import Carousel from './Carousel'
import Property from './Property'
import Host from './Host'
import Rating from './Rating'
import Collapse from './Collapse'



export default function HousingDisplay() {

  // Récupération de la fiche
  const { id } = useParams()
  const data = database.find((housing) => housing.id === id)
  
  // Tags
  const tagList = data?.tags.map((tag, index) => {
     return <Tag key={index} text={tag} />
   })
   
   // Équipements
   const equipements = data?.equipments.map((equipment, index) => {
      return (
            <span key={index}>
               {equipment}
            </span>
      )
   })

   // Nom du logeur
   const name = data?.host.name.split(' ')

   document.title = data?.title + " - Kasa"
   
   return (
      <>
    {data ? (
       <main className='housing'>
        <Carousel slides={data?.pictures}/>
        <div className='housing__header'>
            <div className='housing__header__property'>
               <section className='housing__header__property__info'>
                  <Property
                     title={data?.title}
                     location={data?.location}
                  />
               </section>
               <div className='housing__header__property__tags'>
                  {tagList}
               </div>
            </div>
            <div className='housing__header__owner'>
               <div className='housing__header__owner__info'>
                  <Host
                     firstName={name[0]}
                     lastName={name[1]}
                     picture={data?.host.picture}
                  />
               </div>
                <div className='rating'>
                  <Rating
                     score={data.rating}
                  />
                </div>
            </div>
        </div>
            <div className='collapse'>
                  <Collapse
                     title='Description'
                     content={data?.description}
                  />
                  <Collapse
                     title='Équipements'
                     content={equipements}
                  />
            </div>
:        </main>
    ) : (
      <Navigate replace to="/404"/>
    ) }
    </>
  )
}
