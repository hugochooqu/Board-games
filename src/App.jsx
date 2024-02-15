import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Player from "./components/Player";
import { Scorecard } from "./components/Scorecard";
import Rules from "./components/Rules";
import Game from "./components/Game";
import Root from "./components/Root";
import TicTacToe from "./components/Tic tac toe/TicTacToe";

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
      path: "/player",
      element: <Player />,
      children: [
        {
          path: "/player/game",
          element: <Game />,
        },
      ],
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
