import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    {/* Calls for images by changing number in link by monster ID */}
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />{" "}
    {/* Each Card anme + email is displayed */}
    <h2> {props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
