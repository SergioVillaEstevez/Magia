import { useEffect, useState } from "react";

 const Espectador = () => {
  const [mostrarCarta, setMostrarCarta] = useState(false);
  const [mostrarBoton, setMostrarBoton] = useState(true);
  const [mostrarVolver, setMostrarVolver] = useState(false);
  const [carta, setCarta] = useState<string | null>(null);


  useEffect(() => {
    const cartaForzada = localStorage.getItem("cartaForzada");
    if (cartaForzada) {
      setCarta(cartaForzada);
    }
  }, []);

  const volverIncio = () => {
    setMostrarCarta(false);
    setMostrarBoton(true);
    setMostrarVolver(false);
  };

  const verTuCarta = () => {
    setMostrarCarta(true);
    setMostrarBoton(false);
    setMostrarVolver(true);
  };

  return (
    <>
      {mostrarBoton && (
        <div
          className="contenedorBotones"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <input
            type="button"
            name="boton"
            id="boton"
            value="VER CARTA"
            onClick={verTuCarta}
            style={{
              background: "blue",
              height: "100px",
              width: "300px",
              fontSize: "40px",
              borderRadius: "20px",
              border: "none",
            }}
          />
        </div>
      )}

      <div
        className="ContenedoCartas"
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        {mostrarCarta && carta && (
          <div>
            <img
              src={`/img/${carta}.png`} // ⚠️ Ahora usa la carta seleccionada
              alt={carta}
              style={{
                width: "400px",
                height: "600px",
                borderRadius: "20px",
              }}
            />
          </div>
        )}
      </div>

      {mostrarVolver && (
        <div>
          <input
            type="button"
            name="volver"
            id="volver"
            onClick={volverIncio}
            value="volver"
            style={{
              background: "blue",
              width: "100px",
              height: "50px",
              fontSize: "20px",
              border: "none",
              borderRadius: "20px",
            }}
          />
        </div>
      )}

      <style>
        {`
          @media (max-width: 600px) {
            #boton, #volver {
              width: 80%;
              height: 150px;
              font-size: 24px;
            }
            .ContenedoCartas img {
              width: 200px !important;
              height: 300px !important;
            }
          }
        `}
      </style>
    </>
  );
};

export  default Espectador;
