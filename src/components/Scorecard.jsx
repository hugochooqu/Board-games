import React from 'react';
import { useGameContext } from '../context/GameContext';

export const Scorecard = () => {
  const { playerScore } = useGameContext()

  return (
    <div className='scorecard'>
        <div className='score-title'>ROCK<br/>PAPER<br/>SCISSORS</div>
        <div className='score'>
            <h3>score</h3>
          <h1>{playerScore}</h1>
        </div>
    </div>
  )
}

