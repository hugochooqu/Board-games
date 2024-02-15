import React from 'react'
import { Link } from 'react-router-dom'


const Root = () => {
  return (
    <div>
        <Link to='/Tictactoe'>
        <button>
            Tic Tac Toe
        </button>
        </Link>
        <button>
            Rock Paper Scissors
        </button>
    </div>
  )
}

export default Root