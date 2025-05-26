import { useState } from 'react'
import './App.css'
import { Cliente } from './components/Cliente';
import { loja } from './components/Loja';

function App() {
  const [clientes] = useState<string[]>(['Cliente 1', 'Cliente 2', 'Cliente 3', 'Cliente 4', 'Cliente 5']);
  const [notificacao, setNotificacao] = useState('');

  const addNotificacao = () => {
    if (notificacao.trim() == '') return;
    const mensagem = `${notificacao}`;
    loja.addNotificacao(mensagem);
    setNotificacao('');
  };

  return (
    <>
    <div className="container">
      <h1>Notificações da Loja</h1>

      <div className="input-area">
        <input
          type="text"
          value={notificacao}
          onChange={(e) => setNotificacao(e.target.value)}
        />
        <button onClick={addNotificacao}>Notificar Clientes</button>
      </div>

      <div className="clientes">
        {clientes.map((nome) => (
          <Cliente key={nome} nome={nome} />
        ))}
      </div>
    </div>
    </>
  )
}

export default App
