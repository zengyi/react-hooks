import React, { useContext } from "react";

import { UserContext, ChannelContext } from "../../App";

function UseContext() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div className="row justify-content-center pt-lg-5">
      <div className="col-md-10">
        <div className="card">
          <div className="card-header">useContext</div>
          <div className="card-body">
            <div className="row p-2 border-bottom pt-5">
              User is {user} and channel is {channel}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseContext;
