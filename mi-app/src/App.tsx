
import './componentes/Espectador'
import './App.css'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Espectador from './componentes/Espectador'
import Mago from './componentes/Mago'


function App() {

  

  return (

    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Espectador/>} />
        <Route path="/mago" element={<Mago/>} />
      </Routes>
    </BrowserRouter>





      


    
  )
}

export default App
