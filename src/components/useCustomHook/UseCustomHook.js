import React from "react";
import DocTitleOne from "./DocTitleOne";
import DocTitleTwo from "./DocTitleTwo";
import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";
import UserForm from "./UserForm";

function UseCustomHook() {
  return (
    <div className="row justify-content-center pt-lg-5">
      <div className="col-md-10">
        <div className="card">
          <div className="card-header">useCustomHook</div>
          <div className="card-body">
            <div className="row p-2 border-bottom pt-5 flex-column">
              <h6>Update Document Title</h6>
              <DocTitleOne />
              <DocTitleTwo />
            </div>
            <div className="row p-2 border-bottom pt-5 flex-column">
              <h6>Update counter from multiple component</h6>
              <CounterOne />
              <CounterTwo />
            </div>
            <div className="row p-2 border-bottom pt-5 flex-column">
              <h6>Update state use form input</h6>
              <UserForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseCustomHook;
