import React from 'react';

const TicketColumn = ({ title, tickets, order }) => {
  
  const sortedTickets = tickets.sort((a, b) => {
    if (order === 'title') {
      return a.title.localeCompare(b.title);
    } else if (order === 'priority') {
      return a.priority - b.priority;
    } else {
      throw new Error('Invalid parameter: ' + order);
    }
  });
  return (
    <div className="ticket-column">
      <h2>{title} ({sortedTickets.length})</h2>
      {sortedTickets.length > 0 ? (
        tickets.map(ticket => (
          <div key={ticket.id} className="ticket">
            <h4>{ticket.title}</h4>
            <p>Tag: {ticket.tag.join(', ')}</p>
            <p>Priority: {ticket.priority}</p>
            <p>Status: {ticket.status}</p>
          </div>
        ))
      ) : (
        <p>No tickets</p>
      )}
    </div>
  );
};

export default TicketColumn;
