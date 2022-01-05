import React from "react";
import "./search-box.styles.css";

//functional component example:
//**do not have access to constructor in App Class
//**cant access lifecycle functions and dont have internal state
//**used to only render HTML -> just gets props and renders HTML

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
