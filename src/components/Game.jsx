import React, { useEffect, useState } from "react";
import { Scorecard } from "./Scorecard";
import Player from "./Player";

const Game = (props) => {
const [playerChoice, setPlayerChoice] = useState("");
const [computerChoice, setComputerChoice] = useState("");
const [result, setResult] = useState("");
const [playerScore, setPlayerScore] = useState(0);

const choices = ["rock", "paper", "scissors"];


  console.log(playerChoice);



  const handleComputerChoice = (choice) => {
    setPlayerChoice(choice)
    const computerRandomChoice =
      choices[Math.floor(Math.random() * 3)];
    setComputerChoice(computerRandomChoice);
  };
 

  const Result = () => {
    if (playerChoice === "rock" && computerChoice === "scissors") {
      setResult("win");
      setPlayerScore(playerScore + 1);
    } else if (playerChoice === "rock" && computerChoice === "paper") {
      setResult("lose");
      setPlayerScore(playerScore - 1);
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      setResult("win");
      setPlayerScore(playerScore + 1);
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
      setResult("lose");
      setPlayerScore(playerScore - 1);
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      setResult("win");
      setPlayerScore(playerScore + 1);
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
      setResult("lose");
      setPlayerScore(playerScore - 1);
    } else {
      setResult("draw");
    }
  };

  useEffect(() => {
    Result();
  }, [computerChoice]);
  

  return (
    <div>
      <Player
        setPlayerChoice={setPlayerChoice}
        onShowRules={props.onShowRules}
      />
      Result:
      {result == "win" && <h2>You Win</h2>}
      {result == "lose" && <h2>You lose</h2>}
      {result == "draw" && <h2>Draw</h2>}
    </div>
  );
};

export default Game;
