import React from "react";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import UseState from "./components/useState/UseState";
import UseEffect from "./components/useEffect/UseEffect";
import UseContext from "./components/useContext/UseContext";
import UseReducer from "./components/useReducer/UseReducer";
import UseCallback from "./components/useCallback/UseCallback";
import UseMemo from "./components/useMemo/UseMemo";
import UseRef from "./components/useRef/UseRef";
import UseCustomHook from "./components/useCustomHook/UseCustomHook";

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
            <Tab eventKey="useReducer" title="useReducer">
              <UseReducer />
            </Tab>
            <Tab eventKey="useCallback" title="useCallback">
              <UseCallback />
            </Tab>
            <Tab eventKey="useMemo" title="useMemo">
              <UseMemo />
            </Tab>
            <Tab eventKey="useRef" title="useRef">
              <UseRef />
            </Tab>
            <Tab eventKey="useCustomHook" title="useCustomHook">
              <UseCustomHook />
            </Tab>
          </Tabs>
        </Container>
      </ChannelContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
