
import './componentes/Boton'
import './App.css'
import { Boton } from './componentes/Boton'
import { useState } from 'react'


function App() {

  const[text, setText]= useState("BIENVENID@")


  return (
    <>
      <div><h1>{text}</h1></div>

      <Boton setText={setText}></Boton>

      


    </>
  )
}

export default App
