import React from "react";

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <h4>{ticket.title}</h4>
      <p>Assigned to: {ticket.user}</p>
      <p>Priority: {ticket.priority}</p>
      <p>Status: {ticket.status}</p>
    </div>
  );
};

export default TicketCard;
