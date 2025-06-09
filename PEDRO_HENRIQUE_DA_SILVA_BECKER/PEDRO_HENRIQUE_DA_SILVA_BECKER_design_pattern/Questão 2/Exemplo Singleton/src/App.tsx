import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Contador } from './components/Contador'

function App() {
  const contador = Contador.getInstance();
  const [valor, setValor] = useState(contador.getValor());

  const handleAumentar = () => {
    contador.aumentar();
    setValor(contador.getValor());
  };

  const handleDiminuir = () => {
    contador.diminuir();
    setValor(contador.getValor());
  };

  return (
    <>
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Contador: {valor}</h1>
      <button style={{marginRight: "1rem"}} onClick={handleAumentar}>Aumentar</button>
      <button onClick={handleDiminuir}>Diminuir</button>
    </div>
    </>
  )
}

export default App
