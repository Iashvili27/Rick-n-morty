import React from "react";

const Search = (props) => {
  return (
    <input
      type="text"
      onChange={props.onClick}
      className="input"
      placeholder="Search"
    />
  );
};

export default Search;
