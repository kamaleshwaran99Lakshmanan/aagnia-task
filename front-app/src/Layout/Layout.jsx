import React from "react";
import Sidemenu from "../Sidemenu";
import { Outlet } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Calendar from "../Components/Calender";
import Mentor from "../Components/Mentor";
import Tracking from "../Components/Tracking";
const Layout = () => {
  return (
    <>
      <Row className="inner h-100 rounded">
        <Col lg={2} className="sidemenu rounded">
          <Sidemenu />
        </Col>
        <Col lg={6} className="m-0">
          <Outlet />
        </Col>
        <Col lg={4}>
          <div className="w-50 ms-auto d-flex justify-content-around align-items-center m-1">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/appointment-reminders--v1.png"
              alt="appointment-reminders--v1"
            />
            <h5 className="m-0">Grace Walker</h5>
            <div
              className="pro d-flex align-items-center"
              style={{
                width: "30px",
                height: "30px",
                padding: "20px",
                borderRadius: "50%",
                backgroundColor: "#f0f0f0",
                justifyContent: "center",
              }}
            >
              <small>
                <b>GW</b>
              </small>
            </div>
          </div>

          <div className="h-100">
            <Calendar />
            <br />
            <Mentor />
            <br />
            <Tracking/>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Layout;
