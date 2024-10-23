import React, { useState } from "react";
import "./Navbar.css";
import dis from "../assets/Display.svg"; 
import downn from "../assets/down.svg"; 


const Navbar = ({ grouping, sorting, onDisplayChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleGroupingChange = (e) => {
    onDisplayChange(e.target.value, sorting);
  };

  const handleSortingChange = (e) => {
    onDisplayChange(grouping, e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="display-button" onClick={() => setIsOpen(!isOpen)}>
        <img src={dis} alt="Icon Description" className="column-icon" />
        <span>Display</span>
        <img src={downn} alt="Icon Description" className="column-icon" />
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <label>Grouping</label>
            <select value={grouping} onChange={handleGroupingChange}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <label>Ordering</label>
            <select value={sorting} onChange={handleSortingChange}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
