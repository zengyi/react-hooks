import React from "react";
import Counter from "./Counter";
function UseMemo() {
  return (
    <div className="row justify-content-center pt-lg-5">
      <div className="col-md-10">
        <div className="card">
          <div className="card-header">useMemo</div>
          <div className="card-body">
            <div className="row p-2 border-bottom pt-5 flex-column">
              <h6>When to useMemo and useCallback</h6>
              <a
                href="https://kentcdodds.com/blog/usememo-and-usecallback"
                target="_blank"
              >
                Read More About When to useMemo and useCallback
              </a>
            </div>
            <div className="row p-2 border-bottom pt-5 flex-column">
              <Counter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseMemo;
