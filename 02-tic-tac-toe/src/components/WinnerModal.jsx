import { Square } from './Square'
export function WinnerModal({ winner, resetGame }) { // Add resetGame to the props
  if (winner === null) return null

  const winnerText = winner === false ? 'Draw!' : `Winner: ${winner}`

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>

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