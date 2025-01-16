import { useEffect, useState } from "react";

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };
    if (enabled === true) {
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  useEffect(() => {
    document.body.classList.toggle("no-cursor", !enabled);

    return () => {
      document.body.classList.remove("no-cursor");
    };
  }, [enabled]);
  return (
    <>
      <div
        style={{
          backgroundColor: "#09f",
          borderRadius: "50%",
          height: 50,
          left: -25,
          opacity: 0.8,
          pointerEvents: "none",
          position: "absolute",
          top: -25,
          width: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguimiento del puntero
      </button>
    </>
  );
};
function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  );
}

export default App;
