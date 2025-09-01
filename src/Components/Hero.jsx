import React, { useEffect, useState } from "react";
import "./Hero.css";
import Card from "./Card";
import { getTickets, getUsers } from "../services/api";
import Navbar from "./Navbar";

function Hero() {
     const [tickets, setTickets] = useState([]);
        const [users, setUsers] = useState([]);


    useEffect(() => {
        // Fetching data from the API
       getTickets().then((data)=>setTickets(data));
       getUsers().then((data)=>setUsers(data));
    }, []);


    return (
        <div className="Hero">
            <div className="navbar">
                 <Navbar users={users} ticket={tickets}/>

            </div>
        <div className="card-grid">
            {tickets.map((ticket)=>{
                return (<Card key={ticket.id} ticket={ticket}/>)
            })}
        </div>
        </div>
       
    )

    // // Helper function to get user details by userId
    // const getUserDetails = (userId) => users.find((user) => user.id === userId);

    // // Sorting tickets based on the selected sort option
    // const sortedTickets = [...tickets].sort((a, b) => {
    //     if (sortBy === "priority") {
    //         return b.priority - a.priority; // Descending order by priority
    //     } else if (sortBy === "title") {
    //         return a.title.localeCompare(b.title); // Ascending order by title
    //     }
    //     return 0;
    // });

    // // Grouping tickets based on the selected group option
    // const groupedTickets = sortedTickets.reduce((groups, ticket) => {
    //     let groupKey;
    //     if (groupBy === "status") {
    //         groupKey = ticket.status;
    //     } else if (groupBy === "user") {
    //         groupKey = ticket.userId;
    //     } else if (groupBy === "priority") {
    //         groupKey = ticket.priority;
    //     }

    //     if (!groups[groupKey]) {
    //         groups[groupKey] = [];
    //     }
    //     groups[groupKey].push(ticket);
    //     return groups;
    // }, {});

    // return (
    //     <div className="hero-section">
    //         {Object.keys(groupedTickets).map((group) => (
    //             <div key={group} className="ticket-group">
    //                 <h3>
    //                     {groupBy === "user"
    //                         ? getUserDetails(group)?.name
    //                         : group}
    //                 </h3>

    //                 <div className="ticket-list">
    //                     <Card groupedTickets={groupedTickets}/>
    //                     {/* {groupedTickets[group].map((ticket) => {
    //                         const user = getUserDetails(ticket.userId);
    //                         return (
    //                             <div key={ticket.id} className="ticket-card">
    //                                 <div className="ticket-header">
    //                                     <h4>{ticket.title}</h4>
    //                                     <small>ID: {ticket.id}</small>
    //                                 </div>
    //                                 <div className="ticket-body">
    //                                     <p>Tag: {ticket.tag.join(", ")}</p>
    //                                     <p>Status: {ticket.status}</p>
    //                                     <p>Priority: {ticket.priority}</p>
    //                                 </div>
    //                                 <div className="ticket-footer">
    //                                     <div className="user-info">
    //                                         <img
    //                                             src={`https://robohash.org/${user.id}.png?size=50x50`} // Sample user image using RoboHash
    //                                             alt={user.name}
    //                                             className="user-avatar"
    //                                         />
    //                                         <span>{user.name}</span>
    //                                         <span
    //                                             className={`availability ${
    //                                                 user.available
    //                                                     ? "available"
    //                                                     : "not-available"
    //                                             }`}
    //                                         >
    //                                             {user.available
    //                                                 ? "Available"
    //                                                 : "Not Available"}
    //                                         </span>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         );
    //                     })} */}
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    // );
}

export default Hero;
