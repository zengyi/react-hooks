import React from "react";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import UseState from "./components/useState/UseState";
import UseEffect from "./components/useEffect/UseEffect";
import UseContext from "./components/useContext/UseContext";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <UserContext.Provider value={"daniel"}>
      <ChannelContext.Provider value={"dts"}>
        <Container className="container pt-5">
          <Tabs defaultActiveKey="useState" id="uncontrolled-tab">
            <Tab eventKey="useState" title="useState">
              <UseState />
            </Tab>
            <Tab eventKey="useEffect" title="useEffect">
              <UseEffect />
            </Tab>
            <Tab eventKey="useContext" title="useContext">
              <UseContext />
            </Tab>
          </Tabs>
        </Container>
      </ChannelContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
