
import React from 'react';
import './styles.css';

const Header = ({ onGroupChange, onSortChange }) => {
  return (
    <div className="header">
      <select onChange={(e) => onGroupChange(e.target.value)}>
        <option value="status">Group by Status</option>
        <option value="user">Group by User</option>
        <option value="priority">Group by Priority</option>
      </select>
      <button onClick={() => onSortChange('asc')}>Sort Ascending</button>
      <button onClick={() => onSortChange('desc')}>Sort Descending</button>
    </div>
  );
};

export default Header;
            