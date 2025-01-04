export const Square = ({ children, isSelected, updateBoard, index }) => {
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