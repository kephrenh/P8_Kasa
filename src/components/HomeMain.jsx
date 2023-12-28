import React from 'react'
import { useState, useEffect } from 'react'
import HomeMainFig from './HomeMainFig'

export default function HomeMain() {

  const fetchData = () => {
    fetch("database.json")
    .then(r => r.json())
    .then(json => setData(json))
    .catch(console.error)
  }

  const [data, setData] = useState([]);

  useEffect(fetchData, []);

  const thumbs = data.slice(0, 6)
              .map((data) => {
                return <HomeMainFig
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}/>
              })

  return (
    <main className='main'>{thumbs}</main>
  )
}
