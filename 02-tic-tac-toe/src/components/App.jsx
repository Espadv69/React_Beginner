import { useState } from 'react' // Import useState hook
import confetti from 'canvas-confetti' // Import confetti library


import { Square } from './Square.jsx' // Import Square component
import { WinnerModal } from './WinnerModal.jsx' // Import WinnerModal component
import { TURNS } from '../constants.js' // Import TURNS and WINNER_COMBINATIONS constants
import { checkWinnerFrom, checkEndGameFrom } from '../logic/board.js' // Import checkWinner function
import { saveGameFromStorage, resetGameFromStorage } from '../logic/storage/index.js' // Import saveGame and resetGame functions

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem('board') // Get the board from the local storage
    return boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : Array(9).fill(null)
  }) // Add board state

  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem('turn') // Get the turn from the local storage
    return turnFromLocalStorage ?? TURNS.X
  }) // Add turn state

  const [winner, setWinner] = useState(null) // Add winner state

  const resetGame = () => {
    setBoard(Array(9).fill(null)) // Reset the board
    setTurn(TURNS.X) // Reset the turn
    setWinner(null) // Reset the winner

    resetGameFromStorage() // Reset the game in the local storage
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return // If the square is already filled or there is a winner, return

    const newBoard = [...board] // Copy the board
    newBoard[index] = turn // Update the board with the current turn
    setBoard(newBoard) // Update the board

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn) // Change the turn

    saveGameFromStorage({ newBoard, newTurn }) // Save the game in the local storage

    const newWinner = checkWinnerFrom(newBoard) // Check if there is a winner
    if (newWinner) {
      confetti() // Add confetti
      setWinner(newWinner) // Set the winner. This is not sinchronous
    } else if (checkEndGameFrom({ newBoard })) {
      setWinner(false) // Set the winner to false  => Draw
    }
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>ResetGame</button>
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

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
