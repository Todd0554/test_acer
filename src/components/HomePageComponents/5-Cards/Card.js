import React from 'react'

function Card(props) {
  return (
    
    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
        <div className="card">
            <img src={props.url}/>
            <div class="card-body">
                <div class="card-date">
                    <h5>{props.date}</h5>
                </div>
                <div className="Higher-education">Higher education</div>
                <div class="card-text">
                    <h3>{props.content}</h3>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Card