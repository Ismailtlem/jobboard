import React, { useState } from "react";

function SearchBar() {
  const [term, setSearchTerm] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container py-8 m-4 p-6">
      <input
        className="w-full h-16 px-3 rounded mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg"
        type="search"
        placeholder="Search..."
        value={term}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
