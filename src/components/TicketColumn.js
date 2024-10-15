import React from 'react';

const TicketColumn = ({ title, tickets }) => {
  return (
    <div className="ticket-column">
      <h2>{title}</h2>
      {tickets.length > 0 ? (
        tickets.map(ticket => (
          <div key={ticket.id} className="ticket">
            <h3>{ticket.title}</h3>
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
