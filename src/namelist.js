import React from "react";
import { firstBook } from "./datamain";
import Length from "./length";
import { useState } from "react";
const Namelist = () => {
  const [people, setPeople] = React.useState(firstBook);
  const [counter, setstate] = useState(people.length);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      <h4>{counter}</h4>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className="item">
            <h4>
              {console.log(people.length)}
              {name}
            </h4>
            <button onClick={() => setstate(counter - 1)}>remove</button>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button onClick={() => setPeople([])} variant="primary">
        primary
      </button>
    </>
  );
};
export default Namelist;
