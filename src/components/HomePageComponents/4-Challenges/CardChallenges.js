import React from 'react'

function CardChallenges(props) {
  return (
    <div className="chal col-sm-12 col-md-4">
      <img src={props.svgURL} alt="logo" />
      <div >
        <p className="card-title" style={{"fontSize": "20px"}}>{props.name}</p>
        <p className="card-content" style={{"fontSize": "16px", "fontFamily": "Roboto"}}>{props.content}</p>
      </div>
    </div>
  )
}

export default CardChallenges