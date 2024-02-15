import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Player from "./components/Player";
import { Scorecard } from "./components/Scorecard";
import Rules from "./components/Rules";
import Game from "./components/Game";
import Root from "./components/Root";
import TicTacToe from "./components/Tic tac toe/TicTacToe";
import Rps from "./components/Rock paper scissors/Rock-paper-scissors";

function App() {
  const [rulesIsShown, setRulesIsShown] = useState(false);

  const showRulesHandler = () => {
    setRulesIsShown(true);
  };

  const hideRulesHandler = () => {
    setRulesIsShown(false);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/rock-paper-scissors",
      element: <Rps />,
    },
    {
      path: "Tictactoe",
      element: <TicTacToe />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

// {rulesIsShown && <Rules onHideRules={hideRulesHandler} />}

//       <Game onShowRules={showRulesHandler}/>
