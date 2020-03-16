import React, { useState, useEffect } from "react";
import HookMouse from "./HookMouse";
import axios from "axios";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [display, setDisplay] = useState(true);

  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    console.log("useEffect - Updating document title ");
    document.title = `You clicked ${count} times`;
  }, [count]);

  const [count2, setCount2] = useState(0);

  const tick = () => {
    setCount2(count2 + 1);
    //setCount2(prevCount2 +1) no need add count2 as dependency in useEffect
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count2]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        console.log(res);
        setPost(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  return (
    <div className="row justify-content-center pt-lg-5">
      <div className="col-md-10">
        <div className="card">
          <div className="card-header">useEffect</div>
          <div className="card-body">
            <div className="row p-2 border-bottom pt-5">
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <button onClick={() => setCount(count + 1)}>
                useEffect - Click {count} times
              </button>
            </div>
            <div className="row p-2 border-bottom pt-5">
              <h6>IntervalHookCounter: </h6> {count2}
            </div>
            <div className="row p-2 border-bottom pt-5">
              <button onClick={() => setDisplay(!display)}>
                Toggle display
              </button>
              {display && <HookMouse />}
            </div>
            <div className="row p-2 border-bottom pt-5">
              <input
                type="text"
                value={id}
                onChange={e => setId(e.target.value)}
              />
              <button type="button" onClick={handleClick}>
                Fetch Post
              </button>
              <div>{post.title}</div>
              {/* <ul>
				{posts.map(post => (
          <li key={post.id}>{post.title}</li>
				))}
			</ul> */}
            </div>
            <div className="row p-2 border-bottom pt-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseEffect;
