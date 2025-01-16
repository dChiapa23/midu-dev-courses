import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import confetti from "canvas-confetti";
import { TURN, ALERT_TEXTS } from "./constants";
import { checkWinner, checkDraw } from "./logic/board";
import { Turns } from "./components/Turns.jsx";
import { Game } from "./components/Game.jsx";
import { Reset } from "./components/Reset.jsx";
import {
  saveGameToStorage,
  resetGameStorage,
  getBoardFromStorage,
  getTurnFromStorage,
} from "./logic/storage";

import "./App.css";

const MySwal = withReactContent(Swal);

export function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = getBoardFromStorage();
    if (boardFromStorage) return boardFromStorage;
    return Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = getTurnFromStorage();
    if (turnFromStorage) return turnFromStorage;
    return TURN.X;
  });

  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURN.X);
    setWinner(null);
    resetGameStorage();
  };

  const showAlert = (title, text, icon, callback) => {
    if (title === "Error") {
      MySwal.fire({
        icon: icon,
        title: title,
        text: text,
        showDenyButton: false,
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed && callback) {
          callback();
        }
      });
    } else {
      MySwal.fire({
        icon: icon,
        title: title,
        text: text,
        showDenyButton: true,
        confirmButtonText: "Sí",
        denyButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed && callback) {
          callback();
        }
      });
    }
  };

  const updateBoard = (index) => {
    if (winner) {
      const { title, text, icon } = ALERT_TEXTS.gameOver;
      showAlert(title, text, icon, resetGame);
      return;
    } else if (board[index] && !checkDraw(board)) {
      const { title, text, icon } = ALERT_TEXTS.occupied;
      showAlert(title, text, icon, null);
      return;
    } else if (checkDraw(board)) {
      const { title, text, icon } = ALERT_TEXTS.draw;
      showAlert(title, text, icon, resetGame);
      return;
    }

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURN.X ? TURN.O : TURN.X;
    setTurn(newTurn);

    saveGameToStorage({ board: newBoard, turn: newTurn });

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
      const { title, text, icon } = ALERT_TEXTS.winner(newWinner);
      showAlert(title, text, icon, resetGame);
    } else if (checkDraw(newBoard)) {
      const { title, text, icon } = ALERT_TEXTS.draw;
      showAlert(title, text, icon, resetGame);
    }
  };

  return (
    <main className="board">
      <h1>Ta te ti</h1>
      <Game updateBoard={updateBoard} board={board}></Game>
      <Turns turn={turn}></Turns>
      <Reset resetGame={resetGame}></Reset>
    </main>
  );
}
