import { useState } from "react"

type BotonProps = {
  setText: (value: string) => void;
};

export const Boton = ({setText} : BotonProps) =>{
    const [mostrarCarta,setMostrarCarta]= useState(false);
    const [futuraCarta, setFuturaCarta]= useState(false);
    const [mostrarBoton,setMostrarBoton] = useState(true);
    const [mostrarVolver,setMostrarVolver] = useState(false);
    

    const volverIncio= ()=>{
        document.location.reload();
    }

    const verTuCarta = ()=>{

            setMostrarCarta(true);
           setFuturaCarta(false);
           setMostrarBoton(false);
           setText("Tu carta es el 2 de picas")
            setMostrarVolver(true)

    }

    const verFuturaCarta= ()=> {
        setFuturaCarta(true);
        setMostrarCarta(false);
        setMostrarBoton(false);
        setText("Tu carta futura es la Reina de Picas");
        setMostrarVolver(true)
    }

    return(
        <>

        {mostrarBoton  && ( <div 
        className="contenedorBotones"
        style={{
            display:"flex",
            gap:"20px",
            justifyContent:"center",
            padding:"20px"
        
            

        }}  >
           
            
            <input type="button" name="boton" id="boton" value="TU CARTA" onClick={verTuCarta}
            style={{
                background:"blue", 
                height:"200px",
                width:"400px",
                fontSize:"40px"
                
                }}/>
             <input type="button" name="botoFuturo" id="botonFuturo" value="FUTURA CARTA" onClick={verFuturaCarta}
             style={{
                background:"green",
                height:"200px",
                width:"400px",
                fontSize:"40px"
                
                
                }}/>

        </div>)} 
       

        <div 
        className="ContenedoCartas" 
        style={{
            
            display: "flex",
            gap:"20px",
            justifyContent:"center",
            width:"100%",
            maxWidth:"1200px",
            margin:"0 auto",
            padding: "20px"
            
            
            }}>

            
            {mostrarCarta && (
                <div>
                <img src="/img/2Picas.png" alt="2 de picas" width={400} height={600}/>
                </div>


)}

            {futuraCarta && (   
                <div>
                    <img src="/img/reinaPicas.png" alt="Reina de Picas" width={400} height={600} />

                </div>



            

)}


    {mostrarVolver && (

            <div>
                    <input type="button" name="volver" id="volver" onClick={volverIncio} value="volver"
                    style={{
                        background:"red",
                        width: "100px",
                        height: "100px",
                        fontSize: "30px"
                    }} />

            </div>

    )}





</div>
        
        
        </>


    )


}