import React from 'react'
import "./style.css";
import Card from './Card';


function Cards() {
  const cards = [
    {
      "url": "/images/card-image-1.png",
      "date": "9 August 2022",
      "content": "Investing in teacher development: Building an evidence base in Lao PDR"
    },
    {
      "url": "/images/card-image-2.png",
      "date": "30 August 2022",
      "content": "Snapshot of Australian teachers and principals"
    },
    {
      "url": "/images/card-image-3.png",
      "date": "5 December 2022",
      "content": "Building the evidence base for educational quality in the Pacific"
    },
    {
      "url": "/images/card-image-4.png",
      "date": "8 November 2022",
      "content": "A knowledge portal on learning assessments for South Asia"
    },

  ]
  return (
    <div className="cards-component">
      <h2>Discover the latest from ACER</h2>
      <div className="row" id="rowcard">
        {cards.map((e, i) => {
          return (
            <Card url={e.url} date={e.date} content={e.content}/>
          )
        })}
      </div>
    </div>
  )
}

export default Cards