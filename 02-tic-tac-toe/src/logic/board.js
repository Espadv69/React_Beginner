import { WINNER_COMBINATIONS } from '../constants.js' // Import WINNER_COMBINATIONS constant

export const checkWinnerFrom = (boardToCheck) => {

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

export const checkEndGameFrom = ({ newBoard }) => {
  return newBoard.every((square) => square !== null) // Check if all the squares are filled
}