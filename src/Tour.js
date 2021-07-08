import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";
const url = "https://course-api.com/react-tours-project";
export const Tour = () => {
  const [loader, setloader] = useState(false);
  const [getmydata, setSetdata] = useState([]);

  const ferchdata = async () => {
    setloader(false);
    const getmyapi = await fetch(url);
    const getmydata = await getmyapi.json();
    setSetdata(getmydata);
  };
  useEffect(() => {
    ferchdata();
  }, []);

  if (loader) {
    return (
      <>
        <Spinner animation="border" variant="primary" />
      </>
    );
  }

  return (
    <div className="grid-5">
      {getmydata.map((person) => {
        return (
          <div key={person.id} {...person}>
            <div className="tourpack">
              <img src={person.image} alt={person.name} className="five-px" />
              <h6>{person.name}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};
