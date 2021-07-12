import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
const url = "https://course-api.com/react-tours-project";
export const Tour = () => {
  const [loader, setloader] = useState(true);
  const [getmydata, setSetdata] = useState([]);
  const [show, setshow] = useState(true);
  const ferchdata = async () => {
    try {
      const getmyapi = await fetch(url);
      const getmydata = await getmyapi.json();
      setloader(false);
      setSetdata(getmydata);
    } catch (error) {
      setloader(false);
      console.log(error);
    }
  };
  useEffect(() => {
    ferchdata();
  }, []);

  if (loader) {
    return (
      <>
        <Spinner animation="border" variant="primary" class="loding" />
      </>
    );
  }

  return (
    <>
      {show && (
        <div className="grid-5">
          {getmydata.map((person) => {
            return (
              <div key={person.id} {...person}>
                <div className="tourpack">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="five-px"
                  />
                  <h6>{person.name}</h6>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <Button onClick={() => setshow(!show)} variant="primary">
        hide all
      </Button>
    </>
  );
};
