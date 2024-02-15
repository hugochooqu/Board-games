import { useState, useContext, createContext, useEffect } from "react";

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const choices = ["rock", "paper", "scissors"];

  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(choices[Math.floor(Math.random() * choices.length)]);
  const [result, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0);

  const incrementScore =()=> setPlayerScore(playerScore + 1)
  const decrementScore =()=>setPlayerScore(playerScore - 1)

  const handlePlayerChoice = (choice) => {
    console.log(choice);

    setPlayerChoice(choice);
    setComputerChoice(choices[Math.floor(Math.random() * choices.length)]);
    console.log(computerChoice);

    if (playerChoice === "rock" && computerChoice === "scissors") {
      setResult("win");
      incrementScore();
    } else if (playerChoice === "rock" && computerChoice === "paper") {
      setResult("lose");
      decrementScore();
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      setResult("win");
      incrementScore();
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
      setResult("lose");
      decrementScore();
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      setResult("win");
      incrementScore();
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
      setResult("lose");
      decrementScore();
    } else {
      setResult("draw");
    }
    console.log(playerScore)
  };

  const value = {
    handlePlayerChoice,
    playerChoice,
    computerChoice,
    playerScore,
    result,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
