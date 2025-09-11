import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

  const Mago = ()=> {
  const cartas = [
    { nombre: "2Picas", img: "/img/2Picas.png" },
    { nombre: "reinaPicas", img: "/img/reinaPicas.png" },
    { nombre: "7Treboles", img: "/img/7Treboles.png" },
    { nombre: "AsDiamantes", img: "/img/AsDiamantes.png" },
    { nombre: "AsCorazones", img: "/img/AsCorazones.png" },

  ];

  const [cartaSeleccionada, setCartaSeleccionada] = useState("");
   const navigate = useNavigate();

  // Guardamos la carta en localStorage para que el espectador la vea
  useEffect(() => {
    if (cartaSeleccionada) {
      localStorage.setItem("cartaForzada", cartaSeleccionada);
       navigate("/");
    }
  }, [cartaSeleccionada]);

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">Modo Mago</h1>
      <div className="grid grid-cols-3 gap-4">
        {cartas.map((c) => (
          <img
            key={c.nombre}
            src={c.img}
            alt={c.nombre}
            className={`cursor-pointer border-4 ${
              cartaSeleccionada === c.nombre ? "border-green-500" : "border-transparent"
            } rounded`}
            onClick={() =>{
                
                setCartaSeleccionada(c.nombre)

            
            
            }}

            style={{

                width:"200px",
                height:"300px",
                padding:"20px",
                borderRadius:"30px"


            }}
          />
        ))}
      </div>
      {cartaSeleccionada && (
        <p className="mt-4 text-xl">Carta seleccionada: {cartaSeleccionada}</p>
      )}
    </div>
  );
}

export default Mago;
