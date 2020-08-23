import React, { useState } from "react";

function SearchBar(props) {
  return (
    <div className="container py-8 m-4 p-6">
      <input
        className="w-full h-16 px-3 rounded mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg"
        type="search"
        placeholder="Search..."
        data-testid="searchbar-id"
        value={props.input}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default SearchBar;
