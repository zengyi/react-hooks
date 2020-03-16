import React, { useState } from "react";

function UseState() {
  const initialCount = 0;
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(initialCount);
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [items, setItems] = useState([]);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount2(prevCount => prevCount + 1);
    }
  };

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
      }
    ]);
  };
  return (
    <div className="row justify-content-center pt-lg-5">
      <div className="col-md-10">
        <div className="card">
          <div className="card-header">useState</div>
          <div className="card-body">
            <div className="row p-2 border-bottom pt-5">
              <button onClick={() => setCount(count + 1)}>Count {count}</button>
            </div>
            <div className="row p-2 border-bottom pt-5">
              Count: {count2}
              <button onClick={() => setCount2(initialCount)} className="ml-5">
                Reset
              </button>
              <button
                onClick={() => setCount2(prevCount => prevCount + 1)}
                className="ml-5"
              >
                Increment
              </button>
              <button
                onClick={() => setCount2(prevCount => prevCount - 1)}
                className="ml-5"
              >
                Decrement
              </button>
              <button onClick={incrementFive} className="ml-5">
                Increment 5
              </button>
            </div>
            <div className="row p-2 border-bottom pt-5">
              <form>
                <input
                  type="text"
                  value={name.firstName}
                  onChange={e =>
                    setName({ ...name, firstName: e.target.value })
                  }
                  className="ml-5"
                />
                <input
                  type="text"
                  value={name.lastName}
                  onChange={e => setName({ ...name, lastName: e.target.value })}
                  className="ml-5"
                />
                <p>Your first name is - {name.firstName}</p>
                <p>Your last name is - {name.lastName}</p>
                <p>{JSON.stringify(name)}</p>
              </form>
            </div>
            <div className="row p-2 border-bottom pt-5">
              <button onClick={addItem}>Add a number</button>
              <ul>
                {items.map(item => (
                  <li key={item.id}>{item.value}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseState;
