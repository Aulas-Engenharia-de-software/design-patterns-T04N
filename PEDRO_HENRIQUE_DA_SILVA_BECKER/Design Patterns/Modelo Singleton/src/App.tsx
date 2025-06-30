import './App.css'
import { useState } from 'react';
import { ClassEstoque } from './components/ClassEstoque'
import type { Item } from './components/ClassEstoque';

function App() {
  const Estoque = ClassEstoque.getInstance();
  const [itens, setItens] = useState<Item[]>(Estoque.getItens());
  
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [qtd, setQtd] = useState(1);
  
  const handleAddItem = () => {
    if(Estoque.addItem({ nome, descricao, qtd })){
      setItens([...Estoque.getItens()]);
      setNome('');
      setDescricao('');
      setQtd(1);
    }
  };
  
  const handleUpdateQtd = (index: number, newQtd: number) => {
    Estoque.updateQtd(index, newQtd);
    setItens([...Estoque.getItens()]);
  };

  const handleRemoverItem = (index: number) => {
    Estoque.removerItem(index);
    setItens([...Estoque.getItens()]);
  };

  return (
    <>
    <div className="App">
      <h1>Estoque da Loja</h1>

      <div>
        <div className="add-form">
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="Descrição"
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
          />
          <input
            type="number"
            min={1}
            value={qtd}
            onChange={e => setQtd(Number(e.target.value))}
          />
          <button onClick={handleAddItem}>Adicionar</button>
        </div>

        <ul className="item-list">
          {itens.map((item, index) => (
            <li key={item.nome}>
              <strong>{item.nome}</strong>
              {item.descricao}
              <input
                type="number"
                min={1}
                value={item.qtd}
                onChange={e => handleUpdateQtd(index, Number(e.target.value))}
              />
              <button onClick={() => handleRemoverItem(index)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  )
}

export default App
