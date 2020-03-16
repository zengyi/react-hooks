import React from "react";
import FocusInput from "./FocusInput";
import Timer from "./Timer";
function UseRef() {
  return (
    <div className="row justify-content-center pt-lg-5">
      <div className="col-md-10">
        <div className="card">
          <div className="card-header">useRef</div>
          <div className="card-body">
            <div className="row p-2 border-bottom pt-5 flex-column">
              <FocusInput />
            </div>
            <div className="row p-2 border-bottom pt-5 flex-column">
              <Timer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseRef;
