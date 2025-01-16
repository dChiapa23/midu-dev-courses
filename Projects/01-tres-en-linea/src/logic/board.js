import { WINNING_COMBINATIONS } from "../constants";

export const checkWinner = (boardToCheck) => {
  for (const combo of WINNING_COMBINATIONS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
};

export const checkDraw = (newBoard) => newBoard.every((cell) => cell);
