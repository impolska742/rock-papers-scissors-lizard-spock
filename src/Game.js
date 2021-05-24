import React from "react";
import Form from "./Form";
import gameData from "./data";
import { Link } from "react-router-dom";

export default class Game extends React.Component {
  state = {
    fields: {},
    check: 1,
  };

  onSubmit = (fields) => {
    this.setState({ fields, check: 0 });
    console.log(this.state);
  };

  render() {
    const { first, second, result } = gameData;
    if (this.state.check) {
      return <Form onSubmit={(fields) => this.onSubmit(fields)} />;
    } else {
      return (
        <>
          <div className="game-section">
            <div className="p1">
              <h1>{this.state.fields.firstPlayer}</h1>
              <img className="game-img" src={first.image} alt={first.name} />
              <h4>{first.name}</h4>
            </div>

            <div className="p2">
              <h1>{this.state.fields.secondPlayer}</h1>
              <img className="game-img" src={second.image} alt={second.name} />
              <h4>{second.name}</h4>
            </div>
          </div>
          <div className="result">
            {result === 1 && <h1>{this.state.fields.firstPlayer} WON!! </h1>}
            {result === -1 && <h1>{this.state.fields.secondPlayer} WON!! </h1>}
            {result === 0 && <h1>Its a DRAW!!</h1>}
            <button className="play-again">
              <Link to="/">Go to Home</Link>
            </button>
          </div>
        </>
      );
    }
  }
}
