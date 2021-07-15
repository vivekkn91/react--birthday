import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Submitreg = () => {
  //const [email, setemail] = useState("");
  //const [password, setpassword] = useState("");
  const [data, setdata] = useState({ name: "", email: "" });
  const [dataPerson, setPerson] = useState([]);

  const getfield = (obj) => {
    const name = obj.target.name;
    const value = obj.target.value;
    setdata({ ...data, [name]: value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    if (data.email && data.password) {
      const dataobj = {
        id: new Date().getTime().toString(),
      };

      setPerson([...dataPerson, dataobj, data]);
      console.log(dataPerson);
      setdata({ email: "", password: "" });
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
            value={data.email}
            onChange={getfield}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Control
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={getfield}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <h1>number of birthday today {dataPerson.length / 2}</h1>
      {dataPerson.map((dataPerson) => {
        const { id, email, password } = dataPerson;

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
export default Submitreg;
