import { useState } from 'react' // Import useState hook
import confetti from 'canvas-confetti' // Import confetti library

import { Square } from './Square.jsx' // Import Square component
import { TURNS, WINNER_COMBINATIONS } from '../constants.js' // Import TURNS and WINNER_COMBINATIONS constants
import { checkWinnerFrom } from '../logic/board.js' // Import checkWinner function

function App() {
  const [board, setBoard] = useState(Array(9).fill(null)) // Add board state

  const [turn, setTurn] = useState(TURNS.X) // Add turn state

  const [winner, setWinner] = useState(null) // Add winner state

  const resetGame = () => {
    setBoard(Array(9).fill(null)) // Reset the board
    setTurn(TURNS.X) // Reset the turn
    setWinner(null) // Reset the winner
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null) // Check if all the squares are filled
  }


  const updateBoard = (index) => {
    if (board[index] || winner) return // If the square is already filled or there is a winner, return

    const newBoard = [...board] // Copy the board
    newBoard[index] = turn // Update the board with the current turn
    setBoard(newBoard) // Update the board

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn) // Change the turn

    const newWinner = checkWinnerFrom(newBoard) // Check if there is a winner
    if (newWinner) {
      confetti() // Add confetti
      setWinner(newWinner) // Set the winner. This is not sinchronous
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // Set the winner to false  => Draw
    }
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>

      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false // Check if the winner is false
                    ? 'Draw!' // If the winner is false, display 'Draw!'
                    : 'Winner:' // If the winner is not false, display 'Winner: '
                }
              </h2>

              <header className='win'>
                {winner && <Square>{winner}</Square>} {/* Add Square component to display the winner */}
              </header>

              <footer>
                <button onClick={resetGame}>Restart</button> {/* Add onClick event to the button */}
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App
