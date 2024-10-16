import React, { useState } from 'react';
import styles from "../App.css";
import TicketsView from "./TicketsView"

const MainView = () => {
  const [view, setView] = useState('users'); // default view
  const [order, setOrder] = useState('title'); 

  const handleViewChange = (newView) => {
    setView(newView);
  };
  const handleOrderChange = (newOrder) => {
    setOrder(newOrder);
  };

  return (
    <div className="App">
      <header>
        <h1>Ticket Viewer</h1>
        <div>
          <button onClick={() => handleViewChange('users')}>Users</button>
          <button onClick={() => handleViewChange('priority')}>Priority</button>
          <button onClick={() => handleViewChange('status')}>Status</button>
        </div>
        <div>
          <button onClick={() => handleOrderChange('priority')}>Priority sort</button>
          <button onClick={() => handleOrderChange('title')}>Title sort</button>
        </div>
      </header>
      <TicketsView view={view} order={order} />
    </div>
  );
};

export default MainView;
