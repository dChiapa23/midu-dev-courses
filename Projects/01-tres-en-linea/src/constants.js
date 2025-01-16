export const TURN = { X: "X", O: "O" };

export const WINNING_COMBINATIONS = [
  [0, 1, 2], // Horizontal
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // Vertical
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // Diagonal
  [2, 4, 6],
];

export const ALERT_TEXTS = {
  occupied: {
    title: "Error",
    text: "Esta casilla ya está ocupada",
    icon: "error",
  },
  gameOver: {
    title: "Juego terminado",
    text: "Ya hay un ganador. ¿Quieres jugar de nuevo?",
    icon: "error",
  },
  draw: {
    title: "Empate",
    text: "El juego ha terminado en empate! ¿Quieres jugar de nuevo?",
    icon: "warning",
  },
  winner: (winner) => ({
    title: "¡Felicidades!",
    text: `El ganador es ${winner}. ¿Quieres jugar de nuevo?`,
    icon: "success",
  }),
};
