import React from "react";

const SortDropdown = ({ sortOption, setSortOption }) => {
  const handleSelect = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <select value={sortOption} onChange={handleSelect}>
      <option value="priority">Sort by Priority</option>
      <option value="title">Sort by Title</option>
    </select>
  );
};

export default SortDropdown;
