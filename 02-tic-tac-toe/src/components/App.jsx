import { useState } from 'react'

const TURNS = {
  X: 'X',
  O: 'O'
}

const WINNER_COMBINATIONS = [
  [0, 1, 2], // Horizontal
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6], // Vertical
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8], // Diagonal
  [2, 4, 6]
]


const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  // Add handleClick function to update the board
  const handleClick = () => {
    updateBoard(index)
  }

  // Add onClick event to the div
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}


function App() {
  const [board, setBoard] = useState(Array(9).fill(null)) // Add board state

  const [turn, setTurn] = useState(TURNS.X) // Add turn state

  const [winner, setWinner] = useState(null) // Add winner state
  const checkWinner = (boardToCheck) => {

    for (const combo of WINNER_COMBINATIONS) {
      const [a, b, c] = combo // Destructure the combo
      if (
        boardToCheck[a] && // Check if the value is not null
        boardToCheck[a] === boardToCheck[b] && // Check if the values are the same
        boardToCheck[a] === boardToCheck[c] // Check if the values are the same
      ) {
        return boardToCheck[a] // Return the winner
      }
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null)) // Reset the board
    setTurn(TURNS.X) // Reset the turn
    setWinner(null) // Reset the winner
  }


  const updateBoard = (index) => {
    if (board[index] || winner) return // If the square is already filled or there is a winner, return

    const newBoard = [...board] // Copy the board
    newBoard[index] = turn // Update the board with the current turn
    setBoard(newBoard) // Update the board

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn) // Change the turn

    const newWinner = checkWinner(newBoard) // Check if there is a winner
    if (newWinner) {
      setWinner(newWinner) // Set the winner. This is not sinchronous
    } // todo: check if game is over
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
