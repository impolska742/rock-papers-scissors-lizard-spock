import React from "react";

function Rules() {
  return (
    <div className="rules">
      <div className="rules-section">
        <h1>Rules : -</h1>
        <ol>
          <li>Scissors cuts Paper</li>
          <li>Paper covers Rock</li>
          <li>Rock crushes Lizard</li>
          <li>Lizard poisons Spock</li>
          <li>Spock smashes Scissors</li>
          <li>Scissors decapitates Lizard</li>
          <li>Lizard eats Paper</li>
          <li>Paper disproves Spock</li>
          <li>Spock vaporizes Rock</li>
          <li>(and as it always has) Rock crushes Scissors</li>
        </ol>
      </div>
      <img
        className="rules-img"
        src="https://puzzlewocky.com/wp-content/uploads/2016/10/RockPaperScissorsLizardSpock.jpg"
        alt="Rules"
      />
    </div>
  );
}

export default Rules;
