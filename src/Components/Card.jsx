import React from "react";
import "./Card.css";

function Card({ticket}) {
    return (
        <div className="card">
           
          
                <h6>{ticket.title}</h6>
              
                <span>{ticket.status}</span>
                <span>{ticket.priority}</span>
               
            
        </div>
    );
}

export default Card;
