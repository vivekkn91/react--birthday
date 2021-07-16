import React from "react";

import { firstBook } from "./datamain";
import Button from "react-bootstrap/Button";

const Namelist = () => {
  const [people, setPeople] = React.useState(firstBook);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      <h1>number of birthday today {people.length}</h1>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className="itemSet">
            <h4>{name}</h4>

            <Button variant="danger" onClick={() => removeItem(id)}>
              delete
            </Button>
          </div>
        );
      })}

      <Button variant="primary" onClick={() => setPeople([])} variant="primary">
        remove everything
      </Button>
    </>
  );
};
export default Namelist;
