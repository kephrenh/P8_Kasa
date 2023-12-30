import React from 'react'
import Card from './Card'
import data from './data'

export default function Gallery() {

  const thumbs = data.slice(0, 6)
              .map((data) => {
                return <Card
                        key={data.id}
                        link={`/housing/${data.id}`}
                        title={data.title}
                        cover={data.cover}/>
              })

  return (
    <main className='main'>{thumbs}</main>
  )
}
