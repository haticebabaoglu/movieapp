import React from "react";
import { NavLink } from "react-router-dom";

const Series = () => {
  return (
    <div>
      <NavLink to="/home" element={<Home />}>
        {" "}
      </NavLink>
    </div>
  );
};

export default Series;
