import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  let history = useNavigate();

  let index = Employees.map((e) => {
    return e.id;
  }).indexOf(id);

  const handleUpdate = (e) => {
    e.preventDefault();

    let a = Employees[index];
    a.Name = name;
    a.Age = age;

    history("/");
  };

  //will load only after 1 time
  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setId(localStorage.getItem("Id"));
  }, []);

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <FormGroup className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name} //it will bind the element
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </FormGroup>
        <FormGroup className="mb-3" controlId="formAge">
          <Form.Control
            type="number"
            placeholder="Enter Age"
            value={age} //it will bind the element
            required
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </FormGroup>
        <Button type="submit" onClick={(e) => handleUpdate(e)}>
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Edit;
