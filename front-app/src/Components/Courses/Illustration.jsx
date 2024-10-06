import React from 'react'
import {Row ,Col} from 'react-bootstrap'

const Illustration = () => {
  return (
    <Row className='d-flex flex-column m-3'>
    <Col>
    <Row className='bord d-flex align-center my-auto mb-3'>
      <Col lg={4} className="color1 p-3 rounded m-3">
      <img width="20" height="20" src="https://img.icons8.com/wired/64/christmas-star.png" alt="christmas-star"/>
      <br />
      <small><b>Start</b>: <br />
      <small>15 November - 17 January</small>
      <hr />
      <div className="w-100 d-flex m-1 my-auto">
        <div className="w-50">Price</div>
        <div className="w-50 text-end">$1600</div>
      </div>
      </small>
      </Col>
      <Col lg={7} classname=" ">
      <div className='mt-4'>
        <div className="w-100 d-flex">
        <div className="w-100">
        <b> UI / UX : Web Interfaces</b>
        </div>
        <div className="ms-1">
         <div className='d-flex'> <img width="20" height="20" src="https://img.icons8.com/ios/50/star--v1.png" className="me-1" alt="star--v1"/> <p>5.2</p></div>
         </div> 
         </div>
         <div className="w-100">
         <p>An online courses for those <br />delve into UI/UX Design <br /></p>
        </div>
        <div className="b w-100 d-flex">
        <button className='btn mt-1'>Ui/Ux Design</button>
        <button className='btn mt-1'>Web Design</button>
        </div>
      </div>
      </Col>
    </Row>
    </Col>
    <hr />
    <Col>
    <Row className='bord d-flex align-center my-auto mb-3'>
      <Col lg={4} className="color2 p-3 rounded m-3">
      <img width="20" height="20" src="https://img.icons8.com/led/32/stop.png" alt="stop"/>
      <br />
      <small><b>Start</b>: <br />
      <small>15 November - 17 January</small>
      <hr />
      <div className="w-100 d-flex m-1 my-auto">
        <div className="w-50">Price</div>
        <div className="w-50 text-end">$1600</div>
      </div>
      </small>
      </Col>
      <Col lg={7} classname=" ">
      <div className='mt-4'>
        <div className="w-100 d-flex">
        <div className="w-100">
        <b>Creative Director</b>
        </div>
        <div className="ms-1">
         <div className='d-flex'> <img width="20" height="20" src="https://img.icons8.com/ios/50/star--v1.png" className="me-1" alt="star--v1"/> <p>5.2</p></div>
         </div> 
         </div>
         <div className="w-100">
         <p>An online courses for those <br />delve into Creative Direction <br /></p>
        </div>
        <div className="b w-100 d-flex">
        <button className='btn mt-1'>Innoative Solution</button>
        </div>
      </div>
      </Col>
    </Row>
    <hr />
    </Col>
    <Col>
    <Row className='bord d-flex align-center my-auto'>
      <Col lg={4} className="color3 p-3 rounded m-3">
      <img width="20" height="20" src="https://img.icons8.com/ios/50/alight-motion.png" alt="alight-motion"/><br />
      <small><b>Start</b>: <br />
      <small>15 November - 17 January</small>
      <hr />
      <div className="w-100 d-flex m-1 my-auto">
        <div className="w-50">Price</div>
        <div className="w-50 text-end">$1600</div>
      </div>
      </small>
      </Col>
      <Col lg={7} classname=" ">
      <div className='mt-4'>
        <div className="w-100 d-flex">
        <div className="w-100">
        <b> Mortion Design, Basic</b>
        </div>
        <div className="ms-1">
         <div className='d-flex'> <img width="20" height="20" src="https://img.icons8.com/ios/50/star--v1.png" className="me-1" alt="star--v1"/> <p>5.2</p></div>
         </div> 
         </div>
         <div className="w-100">
        <p>An online courses for those <br />delve into Mortion Design <br /></p>
        </div>
        <div className="b w-100 d-flex">
        <button className='btn mt-1'>Adobe After Effects</button>
        </div>
      </div>
      </Col>
    </Row>
    </Col>
   </Row>
  )
}

export default Illustration