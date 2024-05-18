import React, { Component } from "react";
import { Players } from "../shared/ListOfPlayers";
export default class Player extends Component {
  render() {
    const handleClick = () => {
      alert("Click successfully!");
    };
    return (
      <div className="container">
        {Players.map((player) => (
          <div className="column" key={player.id}>
            <div className="card">
              <img src={player.img} alt={player.name} />
              <h3>{player.name}</h3>
              <p className="title">{player.club}</p>
              <p>
                <button onClick={handleClick}>Detail</button>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
