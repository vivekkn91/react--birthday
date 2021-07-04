import logo from "./logo.svg";
import "./App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Namelist from "./namelist";
import Length from "./length";
import { useState } from "react";
function App() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title> birthday birthday</Card.Title>
          <Card.Text>
            <Length />
            <Namelist />
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default App;
