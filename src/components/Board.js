// src/components/Board.js
import React, { useMemo } from "react";
import Column from "./Column";
import "./Board.css";

const Board = ({ tickets, users, grouping, sorting }) => {
  const groupedAndSortedTickets = useMemo(() => {
    // First, sort tickets based on sorting preference
    const sortedTickets = [...tickets].sort((a, b) => {
      if (sorting === "priority") {
        return b.priority - a.priority;
      }
      return a.title.localeCompare(b.title);
    });

    // Then group tickets based on grouping preference
    const groups = new Map();

    if (grouping === "status") {
      const statusGroups = [
        "Backlog",
        "Todo",
        "In progress",
        "Done",
        "Canceled",
      ];
      statusGroups.forEach((status) => groups.set(status, []));

      sortedTickets.forEach((ticket) => {
        const currentGroup = groups.get(ticket.status) || [];
        currentGroup.push(ticket);
        groups.set(ticket.status, currentGroup);
      });
    } else if (grouping === "user") {
      users.forEach((user) => groups.set(user.name, []));

      sortedTickets.forEach((ticket) => {
        const user = users.find((u) => u.id === ticket.userId);
        if (user) {
          const currentGroup = groups.get(user.name) || [];
          currentGroup.push(ticket);
          groups.set(user.name, currentGroup);
        }
      });
    } else if (grouping === "priority") {
      const priorities = {
        4: "Urgent",
        3: "High",
        2: "Medium",
        1: "Low",
        0: "No Priority",
      };

      Object.entries(priorities).forEach(([key, value]) => {
        groups.set(value, []);
      });

      sortedTickets.forEach((ticket) => {
        const priorityName = priorities[ticket.priority];
        const currentGroup = groups.get(priorityName) || [];
        currentGroup.push(ticket);
        groups.set(priorityName, currentGroup);
      });
    }

    return groups;
  }, [tickets, users, grouping, sorting]);

  return (
    <div className="board">
      {Array.from(groupedAndSortedTickets).map(([groupName, tickets]) => (
        <Column
          key={groupName}
          title={groupName}
          tickets={tickets}
          users={users}
        />
      ))}
    </div>
  );
};

export default Board;
