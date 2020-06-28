import React from "react";

import scissors from "../../assets/images/scissors.png";
import paper from "../../assets/images/paper.png";
import rock from "../../assets/images/rock.png";

const Player = ({ weapon }) => (
  <>
    <div className="row">
      <img
        src={
          weapon === "rock" ? rock : weapon === "scissors" ? scissors : paper
        }
        alt="Rock Paper Scissors"
      />
    </div>
  </>
);

export default Player;
