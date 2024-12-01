
import React from 'react';
import Card from './Card';
import './styles.css';

const KanbanColumn = ({ title, tickets }) => {
  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      {tickets.map((ticket) => (
        <Card key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default KanbanColumn;
            