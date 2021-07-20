import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Gorm = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [data, setdata] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const personData = {
        id: new Date().getTime().toString(),
        email,
        password,
      };

      setdata((data) => {
        return [...data, personData];
      });
      setemail("");
      setpassword("");
    } else {
      console.log("emty data");
    }
  };

  return (
    <>
      <Form onSubmit={formSubmit}>
        <Form.Group controlId="email">
          <Form.Control
            type="email"
            id="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Control
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <h1>number of birthday today {data.length}</h1>
      {data.map((personData) => {
        const { id, email, password } = personData;
        return (
          <div key={id} className="item">
            <h4>{email}</h4>
            <h4>{password}</h4>
          </div>
        );
      })}
    </>
  );
};
export default Gorm;
