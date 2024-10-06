import React from 'react'
import image1 from '../assets/image1.jpg'  // Add correct extension (.jpg, .png, etc.)
import image2 from '../assets/image2.jpg'  // Add correct extension (.jpg, .png, etc.)
import image3 from '../assets/image3.jpg'  // Add correct extension (.jpg, .png, etc.)

const Mentor = () => {
  return (
    <div className="w-100">
      <h3>Mentors:</h3>

      {/* First mentor */}
      <div className="w-100 d-flex justify-content-around">
        <img src={image1} alt="Mentor 1" style={{ width: '50px', height: '50px', border: '4px solid pink' }} />
        <div className="div">
          <h5>Mentor Name 1</h5>
          <p>Short description about the mentor.</p>
        </div>
        <div className="d-flex align-items-center">
          <small>Exp. 6 years</small>
        </div>
      </div>
      <hr />

      {/* Second mentor */}
      <div className="w-100 d-flex justify-content-around">
        <img src={image2} alt="Mentor 2" style={{ width: '50px', height: '50px', border: '4px solid green' }} />
        <div className="div">
          <h5>Mentor Name 2</h5>
          <p>Short description about the mentor.</p>
        </div>
        <div className="d-flex align-items-center">
          <small>Exp. 5 years</small>
        </div>
      </div>
      <hr />

      {/* Third mentor */}
      <div className="w-100 d-flex justify-content-around">
        <img src={image3} alt="Mentor 3" style={{ width: '50px', height: '50px', border: '4px solid grey' }} />
        <div className="div">
          <h5>Mentor Name 3</h5>
          <p>Short description about the mentor.</p>
        </div>
        <div className="d-flex align-items-center">
          <small>Exp. 7 years</small>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Mentor
