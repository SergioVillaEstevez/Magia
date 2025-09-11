import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Espectador = () => {
  const [mostrarCarta, setMostrarCarta] = useState(false);
  const [mostrarBoton, setMostrarBoton] = useState(true);
  const [mostrarVolver, setMostrarVolver] = useState(false);
  const [carta, setCarta] = useState("");
  const [tapCount, setTapCount] = useState(0); // contador de toques
  const navigate = useNavigate();

  // Cargar carta forzada
  useEffect(() => {
    const cartaForzada = localStorage.getItem("cartaForzada");
    if (cartaForzada) setCarta(cartaForzada);
  }, []);

  // Reset contador después de 1 segundo sin tocar
  useEffect(() => {
    if (tapCount === 0) return;
    const timer = setTimeout(() => setTapCount(0), 1000);
    return () => clearTimeout(timer);
  }, [tapCount]);

  const handleTripleTap = () => {
    setTapCount(prev => prev + 1);
    if (tapCount + 1 === 3) {
      navigate("/mago"); // redirige a modo mago
    }
  };

  const verTuCarta = () => {
    setMostrarCarta(true);
    setMostrarBoton(false);
    setMostrarVolver(true);
  };

  const volverInicio = () => {
    setMostrarCarta(false);
    setMostrarBoton(true);
    setMostrarVolver(false);
  };

  return (
    <>
      {/* Zona invisible en la esquina superior derecha */}
      <div
        onClick={handleTripleTap}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "50px",
          height: "50px",
          zIndex: 1000,
          cursor: "pointer",
        }}
      />

      {mostrarBoton && (
        <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
          <button
            onClick={verTuCarta}
            style={{
              background: "blue",
              height: "100px",
              width: "300px",
              fontSize: "40px",
              borderRadius: "20px",
              border: "none",
              color: "white",
            }}
          >
            VER CARTA
          </button>
        </div>
      )}

      {mostrarCarta && carta && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <img
            src={`/img/${carta}.png`}
            alt={carta}
            style={{ width: "400px", height: "600px", borderRadius: "20px" }}
          />
        </div>
      )}

      {mostrarVolver && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <button
            onClick={volverInicio}
            style={{
              background: "blue",
              width: "100px",
              height: "50px",
              fontSize: "20px",
              border: "none",
              borderRadius: "20px",
              color: "white",
            }}
          >
            volver
          </button>
        </div>
      )}
    </>
  );
};

export default Espectador;