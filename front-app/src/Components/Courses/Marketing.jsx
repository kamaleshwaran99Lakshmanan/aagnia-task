import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Marketing = () => {
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
              <div className="w-50 text-end">$1200</div>
            </div>
          </Col>
          <Col lg={7} className="">
            <div className='mt-4'>
              <div className="w-100 d-flex">
                <div className="w-100">
                  <b>Digital Marketing 101</b>
                </div>
                <div className="ms-1">
                  <div className='d-flex'> 
                    <img width="20" height="20" src="https://img.icons8.com/ios/50/star--v1.png" className="me-1" alt="star--v1"/> 
                    <p>4.9</p>
                  </div>
                </div>
              </div>
              <div className="w-100">
                <p>A comprehensive guide to the basics of digital marketing, SEO, and content creation.</p>
              </div>
              <div className="w-100 d-flex">
                <button className='btn mt-1'>SEO Basics</button>
                <button className='btn mt-1'>Content Marketing</button>
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
              <div className="w-50 text-end">$1500</div>
            </div>
          </Col>
          <Col lg={7} className="">
            <div className='mt-4'>
              <div className="w-100 d-flex">
                <div className="w-100">
                  <b>Social Media Marketing Mastery</b>
                </div>
                <div className="ms-1">
                  <div className='d-flex'> 
                    <img width="20" height="20" src="https://img.icons8.com/ios/50/star--v1.png" className="me-1" alt="star--v1"/> 
                    <p>4.8</p>
                  </div>
                </div>
              </div>
              <div className="w-100">
                <p>Master social media platforms like Facebook, Instagram, and LinkedIn to grow your business.</p>
              </div>
              <div className="w-100 d-flex">
                <button className='btn mt-1'>Social Media Basics</button>
                <button className='btn mt-1'>Advanced Social Strategies</button>
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
                  <b>Email Marketing for Business Growth</b>
                </div>
                <div className="ms-1">
                  <div className='d-flex'> 
                    <img width="20" height="20" src="https://img.icons8.com/ios/50/star--v1.png" className="me-1" alt="star--v1"/> 
                    <p>4.7</p>
                  </div>
                </div>
              </div>
              <div className="w-100">
                <p>Learn how to build email marketing strategies that convert leads into loyal customers.</p>
              </div>
              <div className="w-100 d-flex">
                <button className='btn mt-1'>Email Campaigns</button>
                <button className='btn mt-1'>Automation</button>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Marketing
