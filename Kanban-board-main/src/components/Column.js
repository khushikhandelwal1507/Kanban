import React from 'react';
import Card from './Card';
import './Column.css';
import ni from "../assets/No-priority.svg"; 
import ui from "../assets/urgent.svg"; 
// import ug from "../assets/urgentgrey.svg"; 
import hi from "../assets/high.svg"; 
import mi from "../assets/medium.svg"; 
import li from "../assets/low.svg"; 
import add from "../assets/add.svg"; 
import threedot from "../assets/threedot.svg"; 


import bl from "../assets/Backlog.svg";
import ca from "../assets/Cancelled.svg";
import don from "../assets/Done.svg";
import ip from "../assets/in-progress.svg";
import td from "../assets/To-do.svg";

const Column = ({ title, tickets, users }) => {
  const gpi = (title) => {
    switch (title) {
      case "Medium":
        return mi; // Urgent
      case "Low":
        return li; // High
      case "Urgent":
        return ui; // Medium
      case "High":
        return hi; // Low

      case "Backlog":
        return bl; // Urgent
      case "Todo":
        return td; // High
      case "In progress":
        return ip; // Medium
      case "Done":
        return don; // Low
      case "Canceled":
        return ca; // Low

      default:
        return ni; // No priority
    }
  };

  //   if({title}=="Low")
  //   {<img src={li} alt="Icon Description" className="column-icon" />}

  //   {gpi(title)}

  return (
    <div className="column">
      <div className="column-header">
        <div className="column-header1">
          <img
            src={gpi(title)}
            alt="Icon Description"
            className="column-icon"
          />
          <h2>{title}</h2>
          <span className="ticket-count">{tickets.length}</span>
        </div>
        <div className="column-header2">
          <img src={add} alt="Icon Description" className="column-icon" />
          <img src={threedot} alt="Icon Description" className="column-icon" />
        </div>
      </div>
      <div className="column-content">
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
            ticket={ticket}
            user={users.find((u) => u.id === ticket.userId)}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
