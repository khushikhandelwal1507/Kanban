// import React, { useState, useEffect } from "react";
// import GroupByDropdown from "./components/GroupByDropdown";
// import SortDropdown from "./components/SortDropdown";
// import TicketGroups from "./components/TicketGroups";
// import "./App.css";

// const App = () => {
//   const [tickets, setTickets] = useState([]);
//   const [groupBy, setGroupBy] = useState("status");
//   const [sortOption, setSortOption] = useState(null);

//   // Fetch data from the API on component mount
//   useEffect(() => {
//     fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
//       .then((response) => response.json())
//       .then((data) => setTickets(data.tickets))
//       .catch((error) => console.error("Error fetching tickets:", error));
//   }, []);

//   // Persist groupBy and sortOption across page reloads using localStorage
//   useEffect(() => {
//     const savedGroupBy = localStorage.getItem("groupBy");
//     const savedSortOption = localStorage.getItem("sortOption");

//     if (savedGroupBy) setGroupBy(savedGroupBy);
//     if (savedSortOption) setSortOption(savedSortOption);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("groupBy", groupBy);
//     localStorage.setItem("sortOption", sortOption);
//   }, [groupBy, sortOption]);

//   return (
//     <div className="kanban-board">
//       <h1>Kanban Board</h1>
//       <div className="controls">
//         <GroupByDropdown groupBy={groupBy} setGroupBy={setGroupBy} />
//         <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
//       </div>
//       <TicketGroups
//         tickets={tickets}
//         groupBy={groupBy}
//         sortOption={sortOption}
//       />
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Board from "./components/Board";

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(
    localStorage.getItem("grouping") || "status"
  );
  const [sorting, setSorting] = useState(
    localStorage.getItem("sorting") || "priority"
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDisplayChange = (newGrouping, newSorting) => {
    setGrouping(newGrouping);
    setSorting(newSorting);
    localStorage.setItem("grouping", newGrouping);
    localStorage.setItem("sorting", newSorting);
  };

  return (
    <div className="app">
      <Navbar
        grouping={grouping}
        sorting={sorting}
        onDisplayChange={handleDisplayChange}
      />
      <Board
        tickets={tickets}
        users={users}
        grouping={grouping}
        sorting={sorting}
      />
    </div>
  );
}

export default App;