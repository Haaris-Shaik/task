
import React from 'react';
import KanbanColumn from './KanbanColumn';
import './styles.css';

const KanbanBoard = ({ tickets, groupBy, sortOrder }) => {
  const groupedTickets = () => {
    const groups = tickets.reduce((acc, ticket) => {
      const key = ticket[groupBy];
      if (!acc[key]) acc[key] = [];
      acc[key].push(ticket);
      return acc;
    }, {});

    return Object.entries(groups);
  };

  const sortedTickets = (group) => {
    return [...group].sort((a, b) => {
      if (sortOrder === 'asc') return a.title.localeCompare(b.title);
      return b.title.localeCompare(a.title);
    });
  };

  return (
    <div className="kanban-board">
      {groupedTickets().map(([key, group]) => (
        <KanbanColumn key={key} title={key} tickets={sortedTickets(group)} />
      ))}
    </div>
  );
};

export default KanbanBoard;
            