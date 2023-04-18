import React from 'react'

function CardAvailable(props) {
  return (
    <div className="skills col-sm-12 col-md-4">
      <img src={props.svgURL} alt="logo" />
      <div >
        <h5 className="card-title">{props.name}</h5>
      </div>
    </div>
  )
}

export default CardAvailable