import React from 'react';

const GroupByDropdown = ({ groupBy, setGroupBy }) => {
  const handleSelect = (event) => {
    setGroupBy(event.target.value);
  };

  return (
    <select value={groupBy} onChange={handleSelect}>
      <option value="status">Group by Status</option>
      <option value="user">Group by User</option>
      <option value="priority">Group by Priority</option>
    </select>
  );
};

export default GroupByDropdown;
