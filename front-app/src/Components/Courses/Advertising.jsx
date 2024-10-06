import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Advertising = () => {
  return (
    <Row className='d-flex flex-column m-3'>
      <Col>
        <Row className='bord d-flex align-items-center my-auto mb-3'>
          <Col lg={4} className="color1 p-3 rounded m-3">
            <img width="20" height="20" src="https://img.icons8.com/wired/64/christmas-star.png" alt="christmas-star"/>
            <br />
            <small><b>Start</b>: <br />
              <small>15 November - 17 January</small>
            </small>
            <hr />
            <div className="w-100 d-flex m-1 my-auto">
              <div className="w-50">Price</div>
              <div className="w-50 text-end">$1600</div>
            </div>
          </Col>
          <Col lg={7} className="">
            <div className='mt-4'>
              <div className="w-100 d-flex">
                <div className="w-100">
                  <b>Google Ads: Mastering PPC Advertising</b>
                </div>
                <div className="ms-1">
                  <div className='d-flex'> 
                    <img width="20" height="20" src="https://img.icons8.com/ios/50/star--v1.png" className="me-1" alt="star--v1"/> 
                    <p>4.8</p>
                  </div>
                </div>
              </div>
              <div className="w-100">
                <p>Learn everything about creating effective pay-per-click (PPC) ads using Google Ads.</p>
              </div>
              <div className="w-100 d-flex">
                <button className='btn mt-1'>PPC Basics</button>
                <button className='btn mt-1'>Advanced Google Ads</button>
              </div>
            </div>
          </Col>
        </Row>
        <hr />
      </Col>

      <Col>
        <Row className='bord d-flex align-items-center my-auto mb-3'>
          <Col lg={4} className="color2 p-3 rounded m-3">
            <img width="20" height="20" src="https://img.icons8.com/led/32/stop.png" alt="stop"/>
            <br />
            <small><b>Start</b>: <br />
              <small>15 November - 17 January</small>
            </small>
            <hr />
            <div className="w-100 d-flex m-1 my-auto">
              <div className="w-50">Price</div>
              <div className="w-50 text-end">$1200</div>
            </div>
          </Col>
          <Col lg={7} className="">
            <div className='mt-4'>
              <div className="w-100 d-flex">
                <div className="w-100">
                  <b>Facebook Ads: Marketing</b>
                </div>
                <div className="ms-1">
                  <div className='d-flex'> 
                    <img width="20" height="20" src="https://img.icons8.com/ios/50/star--v1.png" className="me-1" alt="star--v1"/> 
                    <p>4.7</p>
                  </div>
                </div>
              </div>
              <div className="w-100">
                <p>Master the art of creating Facebook ads that engage users and convert leads.</p>
              </div>
              <div className="w-100 d-flex">
                <button className='btn mt-1'>Social Media Basics</button>
                <button className='btn mt-1'>Advanced FB Ads</button>
              </div>
            </div>
          </Col>
        </Row>
        <hr />
      </Col>

      <Col>
        <Row className='bord d-flex align-items-center my-auto'>
          <Col lg={4} className="color3 p-3 rounded m-3">
            <img width="20" height="20" src="https://img.icons8.com/ios/50/alight-motion.png" alt="alight-motion"/><br />
            <small><b>Start</b>: <br />
              <small>15 November - 17 January</small>
            </small>
            <hr />
            <div className="w-100 d-flex m-1 my-auto">
              <div className="w-50">Price</div>
              <div className="w-50 text-end">$1400</div>
            </div>
          </Col>
          <Col lg={7} className="">
            <div className='mt-4'>
              <div className="w-100 d-flex">
                <div className="w-100">
                  <b>Instagram Ads: Grow Your Brand</b>
                </div>
                <div className="ms-1">
                  <div className='d-flex'> 
                    <img width="20" height="20" src="https://img.icons8.com/ios/50/star--v1.png" className="me-1" alt="star--v1"/> 
                    <p>4.6</p>
                  </div>
                </div>
              </div>
              <div className="w-100">
                <p>Learn how to use Instagram ads to grow your brand and increase visibility.</p>
              </div>
              <div className="w-100 d-flex">
                <button className='btn mt-1'>Brand Growth</button>
                <button className='btn mt-1'>Influencer Marketing</button>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Advertising
