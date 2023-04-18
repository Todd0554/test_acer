import React from 'react'
import "./style.css"

function Intro() {
  return (
    <div className="intro">
      <div className="word1">
        CHALLENGE YOUR STUDENTS ON THE WORLD STAGE
      </div>  
      <div className="word2">
        A test page to demonstrate my skills
      </div>
      <p className="word3">
        Motivate top-performing students, assess their <br/>
        progress, and celebrate their achievements.
      </p>
      {/* <div className="btn"> */}
        <button className="btn1" type="button">Find out more</button>
      {/* </div> */}
      
    </div>
  )
}

export default Intro