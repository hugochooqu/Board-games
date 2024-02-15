import React from "react";
import BgTriangle from "../assets/images/bg-triangle.svg";
import Rock from "../assets/images/icon-rock.svg";
import Paper from "../assets/images/icon-paper.svg";
import Scissors from "../assets/images/icon-scissors.svg";
import { Scorecard } from "./Scorecard";
import { useGameContext } from "../context/GameContext";


const Player = (props) => {
  const {handlePlayerChoice} = useGameContext()
  
    
  return (
    <div className="body">
      <Scorecard/>
    <div>
      <img src={BgTriangle} alt="triangle" className="triangle" />
      <button className="rock-button" onClick={() => handlePlayerChoice("rock")}>
        <img src={Rock} alt="triangle" className="rock" />
      </button>
      <button className="paper-button" onClick={() => handlePlayerChoice("paper")}>
        <img src={Paper} alt="triangle" className="rock" />
      </button>
      <button className="scissors-button" onClick={() => handlePlayerChoice("scissors")}>
        <img src={Scissors} alt="triangle" className="rock" />
      </button>
      
      

      <button className="rules-btn" onClick={props.onShowRules}>
        RULES
      </button>
    </div>
    </div>
  );
};

export default Player;
