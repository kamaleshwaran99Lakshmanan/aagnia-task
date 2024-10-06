import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
const Sidemenu = () => {
    const [activeLink, setActiveLink] = useState('/'); // Default active link

    const handleLinkClick = (link) => {
      setActiveLink(link); // Set the active link
    };
  return (
    <>
    <div className="sidemenu d-flex flex-column rounded h-100">
        <div className="h-50">
        <div className="nav d-flex align-items-center ms-1 mb-5" ><img width="30" height="30" src="https://img.icons8.com/pulsar-color/48/ok.png" alt="ok"/><Link to="/"><h4><b>success</b></h4></Link></div>
        <div className={`nav d-flex align-items-center  ${activeLink === '/' ? 'active' : ''}`} ><Link onClick={() => handleLinkClick('/')} to="/"><img className="me-2"width="24" height="24" src="https://img.icons8.com/material-rounded/24/dashboard-layout.png" alt="dashboard-layout"/>Dashboard</Link></div>
        <div className={`nav d-flex align-items-center  ${activeLink === '/Courses' ? 'active' : ''}`} ><Link onClick={() => handleLinkClick('/Courses')} to="/Courses"><img className="me-2"width="24" height="24" src="https://img.icons8.com/external-others-phat-plus/64/external-courses-online-courses-outline-others-phat-plus-37.png" alt="external-courses-online-courses-outline-others-phat-plus-37"/>Courses</Link></div>
        <div className={`nav d-flex align-items-center  ${activeLink === '/Schedule' ? 'active' : ''}`} ><Link onClick={() => handleLinkClick('/Schedule')} to="/Schedule"><img className="me-2"width="24" height="24" src="https://img.icons8.com/ios/50/overtime--v1.png" alt="overtime--v1"/>Schedule</Link></div>
        <div className={`nav d-flex align-items-center  ${activeLink === '/Messages' ? 'active' : ''}`} ><Link onClick={() => handleLinkClick('/Messages')} to="/Messages"><img className="me-2"width="24" height="24" src="https://img.icons8.com/ios/50/messages-mac.png" alt="messages-mac"/>Messages</Link></div>
        <div className={`nav d-flex align-items-center  ${activeLink === '/Resources' ? 'active' : ''}`} ><Link onClick={() => handleLinkClick('/Resources')} to="/Resources"><img className="me-2"width="24" height="24" src="https://img.icons8.com/ios/50/human-resources.png" alt="human-resources"/>Resources</Link></div>
        </div>
        <div className="mt-auto nav">
        <hr />
        <div className="w-50 d-flex justify-content-around align-items-center mb-5">
        <img width="20" height="20" src="https://img.icons8.com/windows/32/exit.png" alt="exit"/>
          <h5 className='m-0'>Logout</h5>
          </div>
        </div>
    </div>
    </>
  )
}

export default Sidemenu