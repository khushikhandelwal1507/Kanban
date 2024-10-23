import React from "react";
import TicketCard from "./TicketCard";

const TicketGroups = ({ tickets, groupBy, sortOption }) => {
  const groupTickets = (tickets) => {
    const grouped = tickets.reduce((groups, ticket) => {
      const key = ticket[groupBy] || "Other";
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(ticket);
      return groups;
    }, {});
    return grouped;
  };

  const sortTickets = (groupedTickets) => {
    if (!sortOption) return groupedTickets;

    Object.keys(groupedTickets).forEach((group) => {
      groupedTickets[group].sort((a, b) => {
        if (sortOption === "priority") {
          const priorityOrder = { Urgent: 1, High: 2, Medium: 3, Low: 4 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });

    return groupedTickets;
  };

  const groupedTickets = groupTickets(tickets);
  const sortedGroupedTickets = sortTickets(groupedTickets);

  return (
    <div className="ticket-groups">
      {Object.keys(sortedGroupedTickets).map((group) => (
        <div key={group} className="ticket-group">
          <h3>{group}</h3>
          {sortedGroupedTickets[group].map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TicketGroups;
