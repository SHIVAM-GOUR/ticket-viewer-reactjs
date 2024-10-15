import React, { useState } from 'react';
import styles from "../App.css";
import TicketsView from "./TicketsView"

const MainView = () => {
  const [view, setView] = useState('users'); // default view

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className="App">
      <header>
        <h1>Ticket Viewer</h1>
        <div>
          <button className={styles.headerButton} onClick={() => handleViewChange('users')}>Users</button>
          <button className={styles.headerButton} onClick={() => handleViewChange('priority')}>Priority</button>
          <button className={styles.headerButton} onClick={() => handleViewChange('status')}>Status</button>
        </div>
      </header>
      <TicketsView view={view} />
    </div>
  );
};

export default MainView;
