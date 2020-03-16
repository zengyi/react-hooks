import React, { useReducer } from "react";

import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";
import CounterThree from "./CounterThree";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import DataFetching from "./DataFetching";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const CountContext = React.createContext();

function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="row justify-content-center pt-lg-5">
      <div className="col-md-10">
        <div className="card">
          <div className="card-header">useReducer</div>
          <div className="card-body">
            <div className="row p-2 border-bottom pt-5 flex-column">
              <h6>Simple reducer:</h6>
              <CounterOne />
            </div>
            <div className="row p-2 border-bottom pt-5 flex-column">
              <h6>Use object in reducer:</h6>
              <CounterTwo />
            </div>
            <div className="row p-2 border-bottom pt-5 flex-column">
              <h6>Use multiple reducers:</h6>
              <CounterThree />
            </div>
            <div className="row p-2 border-bottom pt-5 flex-column">
              <CountContext.Provider
                value={{ countState: count, countDispatch: dispatch }}
              >
                <h6>Combine useReducer and useContext</h6>
                Globle Value: {count}
                <ComponentA />
                <ComponentB />
                <ComponentC />
              </CountContext.Provider>
            </div>
            <div className="row p-2 border-bottom pt-5 flex-column">
              <h6>Combine useReducer and useEffect to fetch data</h6>
              <DataFetching />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseReducer;
