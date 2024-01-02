import React from 'react'
import Card from './Card'
import database from './database'

export default function Gallery() {

  const thumbs = database.slice(0, 6)
              .map((data) => {
                return <Card
                        key={data.id}
                        link={`/housing/${data.id}`}
                        title={data.title}
                        cover={data.cover}/>
              })

  return (
    <main className='gallery'>{thumbs}</main>
  )
}
