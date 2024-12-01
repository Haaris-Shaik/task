
import React, { useState, useEffect } from 'react';
import { fetchTickets } from '../api/api';
import Header from '../components/Header';
import KanbanBoard from '../components/KanbanBoard';
import './styles.css';

const HomePage = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const loadTickets = async () => {
      const data = await fetchTickets();
      setTickets(data);
    };
    loadTickets();
  }, []);

  return (
    <div>
      <Header onGroupChange={setGroupBy} onSortChange={setSortOrder} />
      <KanbanBoard tickets={tickets} groupBy={groupBy} sortOrder={sortOrder} />
    </div>
  );
};

export default HomePage;
            