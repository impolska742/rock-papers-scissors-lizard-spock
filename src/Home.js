import React from "react";
import sample from "./game.mp4";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <video className="videoTag" autoPlay loop>
        <source src={sample} type="video/mp4" />
      </video>
      <header class="viewport-header">
        <div className="viewport-content">
          <h1>Explore</h1>

          <p> Rock, Papers, Scissors, Lizard, Spock</p>

          <button className="home-btn">
            <Link to="/rules">Start Here</Link>
          </button>
        </div>
      </header>

      <main>
        <p>
          Rock, Paper, Scissors, Lizard, Spock is a game of chance that expands.
          It is first used to settle a dispute about what to watch on TV between
          Sheldon and Raj in "The Lizard-Spock Expansion"
        </p>

        <p>
          When Sheldon and Raj can't agree about what to watch on TV, with
          Sheldon favoring Saturn 3 and Raj wanting to watch Deep Space Nine,
          Raj suggests they settle it with a game of Rock Paper Scissors.
          Sheldon thinks they should play Rock Paper Scissors Lizard Spock
          instead, as there is a lower chance that the game will end in a tie.
        </p>

        <p>
          It is mentioned again in "The Rothman Disintegration", where Sheldon
          explains the rules to Penny and Barry Kripke.
        </p>

        <p>
          The game was originally created by Sam Kass with Karen Bryla.
          According to an interview with Kass, the series producers did not
          originally ask for permission to use the game, but Kass was officially
          referenced by Sheldon as the creator of the game during the "The
          Rothman Disintegration", after which he states, "Hail Sam Kass!" to
          which Leonard, Howard, Raj, and Sheldon all then chant "Hail!" while
          raising their hands.
        </p>
      </main>
    </div>
  );
}

export default Home;
