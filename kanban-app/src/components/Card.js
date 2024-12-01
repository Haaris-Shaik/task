
import React from 'react';
import './styles.css';

const Card = ({ ticket }) => {
  const priorityLabels = ['No Priority', 'Low', 'Medium', 'High', 'Urgent'];
  return (
    <div className="card">
      <h3>{ticket.title}</h3>
      <p><strong>Status:</strong> {ticket.status}</p>
      <p><strong>Assigned User:</strong> {ticket.user}</p>
      <p><strong>Priority:</strong> {priorityLabels[ticket.priority]}</p>
    </div>
  );
};

export default Card;
            