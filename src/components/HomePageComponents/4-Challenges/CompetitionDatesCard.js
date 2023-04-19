import React from 'react'

export default function CompetitionDatesCard(props) {
  return (
    <div className="comp col-sm-12 col-md-4">
    <img src={props.svgURL} alt="logo" />
    <div className='date1'>
        {props.date}
        <p className="challengeName">{props.name}</p>
    </div>
  </div>
  )
}
