export const Reset = ({ resetGame }) => {
  return (
    <section className="resetGame">
      <button className="resetGame-button" onClick={resetGame}>
        Reiniciar juego
      </button>
    </section>
  );
};
