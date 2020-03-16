import React from "react";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import UseState from "./components/useState/UseState";
function App() {
  return (
    <Container className="container pt-5">
      <Tabs defaultActiveKey="useState" id="uncontrolled-tab">
        <Tab eventKey="useState" title="useState">
          <UseState />
        </Tab>
        <Tab eventKey="useEffect" title="useEffect"></Tab>
      </Tabs>
    </Container>
  );
}

export default App;
