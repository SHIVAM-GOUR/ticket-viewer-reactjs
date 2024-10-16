import React from 'react';
import TicketColumn from './TicketColumn';

const data = {
    tickets:
        [
            {
                "id": "CAM-1",
                "title": "Update User Profile Page UI",
                "tag": [
                    "Feature request"
                ],
                "userId": "usr-1",
                "status": "Todo",
                "priority": 4
            },
            {
                "id": "CAM-2",
                "title": "Add Multi-Language Support - Enable multi-language support within the application.",
                "tag": [
                    "Feature Request"
                ],
                "userId": "usr-2",
                "status": "In progress",
                "priority": 3
            },
            {
                "id": "CAM-3",
                "title": "Optimize Database Queries for Performance",
                "tag": [
                    "Feature Request"
                ],
                "userId": "usr-2",
                "status": "In progress",
                "priority": 1
            },
            {
                "id": "CAM-4",
                "title": "Implement Email Notification System",
                "tag": [
                    "Feature Request"
                ],
                "userId": "usr-1",
                "status": "In progress",
                "priority": 3
            },
            {
                "id": "CAM-5",
                "title": "Enhance Search Functionality",
                "tag": [
                    "Feature Request"
                ],
                "userId": "usr-5",
                "status": "In progress",
                "priority": 0
            },
            {
                "id": "CAM-6",
                "title": "Third-Party Payment Gateway",
                "tag": [
                    "Feature Request"
                ],
                "userId": "usr-2",
                "status": "Todo",
                "priority": 1
            },
            {
                "id": "CAM-7",
                "title": "Create Onboarding Tutorial for New Users",
                "tag": [
                    "Feature Request"
                ],
                "userId": "usr-1",
                "status": "Backlog",
                "priority": 2
            },
            {
                "id": "CAM-8",
                "title": "Implement Role-Based Access Control (RBAC)",
                "tag": [
                    "Feature Request"
                ],
                "userId": "usr-3",
                "status": "In progress",
                "priority": 3
            },
            {
                "id": "CAM-9",
                "title": "Upgrade Server Infrastructure",
                "tag": [
                    "Feature Request"
                ],
                "userId": "usr-5",
                "status": "Todo",
                "priority": 2
            },
            {
                "id": "CAM-10",
                "title": "Conduct Security Vulnerability Assessment",
                "tag": [
                    "Feature Request"
                ],
                "userId": "usr-4",
                "status": "Backlog",
                "priority": 1
            }

        ],
    users: [
        {
            "id": "usr-1",
            "name": "Anoop sharma",
            "available": false
          },
          {
            "id": "usr-2",
            "name": "Yogesh",
            "available": true
          },
          {
            "id": "usr-3",
            "name": "Shankar Kumar",
            "available": true
          },
          {
            "id": "usr-4",
            "name": "Ramesh",
            "available": true
          },
          {
            "id": "usr-5",
            "name": "Suresh",
            "available": true
          }
    ]
};

// Helper function to organize tickets based on the view type
const organizeTickets = (view) => {
    const { tickets, users } = data;

    if (view === 'users') {
        return users.reduce((result, user) => {
            result[user.name] = tickets.filter(ticket => ticket.userId === user.id);
            return result;
        }, {});
    } else if (view === 'priority') {
        const priorities = [0, 1, 2, 3, 4];
        return priorities.reduce((result, priority) => {
            result[`Priority - ${priority}`] = tickets.filter(ticket => ticket.priority === priority);
            return result;
        }, {});
    } else if (view === 'status') {
        const statuses = Array.from(new Set(tickets.map(ticket => ticket.status)));
        return statuses.reduce((result, status) => {
            result[status] = tickets.filter(ticket => ticket.status === status);
            return result;
        }, {});
    }
    return {};
};

const TicketsView = ({ view, order }) => {
    const columns = organizeTickets(view);

    return (
        <div className="tickets-view">
            {Object.entries(columns).map(([columnName, tickets]) => (
                <TicketColumn key={columnName} title={columnName} tickets={tickets} order={order}/>
            ))}
        </div>
    );
};

export default TicketsView;
