import React from 'react'
import { useState, useEffect } from 'react'
import HomeMainFig from './HomeMainFig'

export default function HomeMain() {

    const fetchData = () => {
        fetch("database.json")
        .then(r => r.json())
        .then(json => setHomeFigure(json))
        .catch(console.error)
      }
    
      const [homeFigure, setHomeFigure] = useState([]);
    
      useEffect(fetchData, []);
    
        const figures = homeFigure
                    .map((data, index) => {
                    if(index >= 1 && index < 8) {
                      return <HomeMainFig
                              key={data.id}
                              id={data.id}
                              title={data.title}
                              cover={data.cover}/>
                    }
                    return null;
                    })
                    .slice(0, 7)
    
  return (
    <main className='main'>{figures}</main>
  )
}
