import React from 'react'
import { Link } from 'react-router-dom'


const Root = () => {
  return (
    <div className='home'>
      <h1 className='home-title'>BOARD GAMES</h1>
      <div className='games-btn'>
        <Link to='/Tictactoe'>
        <button >
            Tic Tac Toe
        </button>
        </Link>
        <button>
            Rock Paper Scissors
        </button>
        </div>
    </div>
  )
}

export default Root