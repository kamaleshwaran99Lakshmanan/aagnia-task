import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Advertising from './Courses/Advertising';
import Brand from './Courses/Brand';
import Marketing from './Courses/Marketing';
import Illustration from './Courses/Illustration';
import Design from './Courses/Design';

function Courses() {
  return (
    <div className="w-100">
      <div className="w-100 mb-3"><h1>Courses.</h1>
      </div>
    <Tabs
      defaultActiveKey="Advertising"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="Advertising" title="Advertising">
     <Advertising/>
      </Tab>
      <Tab eventKey="Design" title="Design">
        <Design/>
      </Tab>
      <Tab eventKey="Marketing" title="Marketing">
        <Marketing/>
      </Tab>
      <Tab eventKey="Illustration" title="Illustration">
        <Illustration/>
      </Tab>
      <Tab eventKey="Brand" title="Brand">
        <Brand/>
      </Tab>
    </Tabs>

    </div>
  );
}

export default Courses;