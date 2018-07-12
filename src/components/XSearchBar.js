import React from "react";

function XSearchBar({ input, handleChange, handleSubmit }) {
  return (
    <form
      className="d-flex justify-content-center"
      onSubmit={event => {
        handleSubmit(event, input);
      }}
    >
      <input
        type="text"
        name="query"
        placeholder="Search..."
        onChange={event => {
          handleChange(event.target.value);
        }}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default XSearchBar;
