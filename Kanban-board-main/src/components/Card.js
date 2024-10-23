// src/components/Card.js
import React from "react";
import ug from "../assets/urgentgrey.svg"; 
import googl from "../assets/google.png"; 
import "./Card.css";

const Card = ({ ticket, user }) => {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4:
        return "🔴"; // Urgent
      case 3:
        return "🟡"; // High
      case 2:
        return "🟢"; // Medium
      case 1:
        return "⚪"; // Low
      default:
        return "⚫"; // No priority
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        {user && (
          <div className="user-avatar">
            <img src={googl} alt={user.name} />
          </div>
        )}
      </div>
      <div className="card-title">
        <span className="priority-icon">
          {getPriorityIcon(ticket.priority)}
        </span>
        <h3>{ticket.title}</h3>
      </div>
      <div className="card-tags">
        <img src={ug} alt="Icon Description" className="column-icon" />
        {ticket.tag.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
