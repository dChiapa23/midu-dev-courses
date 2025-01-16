import React from "react";
import { Square } from "./Square";
export const Game = ({ updateBoard, board }) => {
  return (
    <section className="game">
      {board.map((cell, index) => {
        return (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {board[index]}
          </Square>
        );
      })}
    </section>
  );
};
