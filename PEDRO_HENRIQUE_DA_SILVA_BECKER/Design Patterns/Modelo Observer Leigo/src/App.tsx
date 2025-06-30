import './App.css'
import { Cliente } from './components/Cliente';
import { useState } from 'react';

function App() {
  const [clientes] = useState<string[]>(['Cliente 1', 'Cliente 2', 'Cliente 3']);
  const [notificacoes, setNotificacoes] = useState<string[]>([]);

  const [novaNotificacao, setNovaNotificacao] = useState('');

  const addNotificacao = () => {
    if (novaNotificacao.trim() == '') return;
    const mensagem = `${novaNotificacao}`;
    setNotificacoes((prev) => [...prev, mensagem]);
    setNovaNotificacao('');
  };

  return (
    <>
    <div className="container">
      <h1>Notificações da Loja</h1>

      <div className="input-area">
        <input
          type="text"
          value={novaNotificacao}
          onChange={(e) => setNovaNotificacao(e.target.value)}
        />
        <button onClick={addNotificacao}>Notificar Clientes</button>
      </div>
      
      <p></p>

      <div className="clientes">
        {clientes.map((nome) => (
          <Cliente key={nome} nome={nome} notificacoesCliente={notificacoes} />
        ))}
      </div>
    </div>
    </>
  )
}

export default App