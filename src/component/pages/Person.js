import React from "react";
import { NavLink } from "react-router-dom";
import Home from "./Home";

const Person = () => {
  return (
    <div>
      <NavLink to="/" elemen={<Home />}></NavLink>
    </div>
  );
};

export default Person;
