import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = (props) => {
  console.log("here are props for card-list: ", props);

  return (
    <div className="card-list">
      {/* this maps out each monster from array to card component-> card-list-> lists out cards*/}
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
