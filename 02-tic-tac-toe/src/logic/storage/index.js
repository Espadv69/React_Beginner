export const saveGameFromStorage = ({ newBoard, newTurn }) => {
  window.localStorage.setItem('board', JSON.stringify(newBoard))
  window.localStorage.setItem('turn', newTurn)
}

export const resetGameFromStorage = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}