import React from 'react'
import "./style.css";

function Contacts() {
  return (
    <div className='contacts'>
      <h2>Contact us to find out more</h2>
      <p>One of our friendly staff members will contact you within 24 hours</p>
      <form className='row row4' >
        <div className="form-group col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <input type="text" className="form-control" placeholder="My name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        </div>
        <div className="form-group col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <input type="text" className="form-control" placeholder="Email address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        </div>
        <div className="form-group col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <input type="text" className="form-control" placeholder="School name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        </div>
        <div className="form-group col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Australia</option>
            <option>USA</option>
            <option>England</option>
            <option>Japan</option>
            <option>China</option>
          </select>
          <div className="form-btns">
            <a href="#">Add message (optional)</a>
            <div className="btn2-con" type="submit">
              Send
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contacts