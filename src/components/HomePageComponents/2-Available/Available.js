import React from 'react'
import "./style.css"
import CardAvailable from "./CardAvailable"
import science from "./science.svg"
import math from "./math.svg"
import readings from "./readings.svg"


function Available() {
  return (
    <div className="available">
      <div className="avFont">
        Available for years 4, 6 and 8
      </div>
      <div>
        Online & multiple-choice
      </div>
      <div className="row">
        <CardAvailable svgURL={math} name="Mathematics"/>
        <CardAvailable svgURL={science} name="Science"/>
        <CardAvailable svgURL={readings} name="Reading"/>
      </div>
    </div>
  )
}

export default Available