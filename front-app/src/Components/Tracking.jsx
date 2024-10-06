import React from 'react';
import Card from 'react-bootstrap/Card'; 
import { CardTitle, CardBody } from 'react-bootstrap'; 

const Tracking = () => {
  return (
    <Card className='shadow'>
      <Card.Body>
        <Card.Title>Learning Progress</Card.Title>
        <div className="w-100 d-flex justify-content-between align-items-center my-auto">
          <div><p className='m-0'>Digital Marketing - Unit 3</p></div>
          <div><p className='m-0'><strong>80%</strong></p></div>
        </div>
        <div className="progress">
            <div className="innerPro"></div>
          </div>
        <hr />
        <div className="w-100 d-flex justify-content-between align-items-center my-auto">
          <div><p className='m-0'>Financial Analyst Course - Unit 1</p></div>
          <div><p className='m-0'><strong>60%</strong></p></div>
        </div>
        <div className="progress">
            <div className="innerPro1"></div>
          </div>
        <hr />
        <div className="w-100 d-flex justify-content-between align-items-center my-auto">
          <div><p className='m-0'>Financial Analyst Course - Unit 2</p></div>
          <div><p className='m-0'><strong>40%</strong></p></div>
        </div>
        <div className="progress">
            <div className="innerPro2"></div>
          </div>
      </Card.Body>
    </Card>
  );
}

export default Tracking;
