import React from "react";

export default class Form extends React.Component {
  state = {
    firstPlayer: "",
    secondPlayer: "",
  };

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      firstPlayer: "",
      secondPlayer: "",
    });
  };

  render() {
    return (
      <>
        <form autoComplete="off">
          <div className="form-section">
            <div className="player-1">
              Player 1 :
              <input
                name="firstPlayer"
                placeholder="First Player"
                value={this.state.firstPlayer}
                onChange={(e) => this.change(e)}
              />
            </div>
            <div className="player-2">
              Player 2 :
              <input
                name="secondPlayer"
                placeholder="Second Player"
                value={this.state.secondPlayer}
                onChange={(e) => this.change(e)}
              />
              <br />
            </div>
          </div>
          <button className="game-btn" onClick={(e) => this.onSubmit(e)}>
            Submit
          </button>
        </form>
      </>
    );
  }
}
