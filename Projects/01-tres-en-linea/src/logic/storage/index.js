export const saveGameToStorage = ({ board, turn }) => {
  localStorage.setItem("board", JSON.stringify(board));
  localStorage.setItem("turn", JSON.stringify(turn));
};

export const resetGameStorage = () => {
  localStorage.removeItem("board");
  localStorage.removeItem("turn");
};

export const getBoardFromStorage = () => {
  const boardFromLocalStorage = JSON.parse(localStorage.getItem("board"));
  if (boardFromLocalStorage) return boardFromLocalStorage;
};

export const getTurnFromStorage = () => {
  const turnFromLocalStorage = JSON.parse(localStorage.getItem("turn"));
  if (turnFromLocalStorage) return turnFromLocalStorage;
};
