import { useState } from 'react'
import './App.css'

type Item = {
  nome: string
  descricao: string
  qtd: number
};

function App() {
  const [estoque, setEstoque] = useState<Item[]>([])
  const [nome, setNome] = useState("")
  const [descricao, setDescricao] = useState("")
  const [qtd, setQtd] = useState(1)

  const addItem = () => {
    const exists = estoque.find(item => item.nome.toLowerCase() == nome.toLowerCase())
    if (exists || nome == "" || qtd <= 0){
      return
    }

    const novoItem: Item = { nome, descricao, qtd }
    setEstoque([...estoque, novoItem])
    setNome("")
    setDescricao("")
    setQtd(1)
  };

  const updateQtd = (index: number, attQtd: number) => {
    const att = [...estoque]
    att[index].qtd = attQtd
    setEstoque(att)
  };

  const removerItem = (index: number) => {
    const att = [...estoque];
    att.splice(index, 1);
    setEstoque(att);
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
        <input type="number"
          min={1}
          value={qtd}
          onChange={e => setQtd(Number(e.target.value))}
        />
        <button onClick={addItem}>Adicionar</button>
      </div>

      <ul className="item-list">
        {estoque.map((item, index) => (
          <li key={item.nome}>
            <strong>{item.nome}</strong>
            {item.descricao}
            <input
              className='input-list'
              type="number"
              value={item.qtd}
              min={1}
              onChange={e => updateQtd(index, Number(e.target.value))}
            />
            <button onClick={() => removerItem(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </>
  )
}

export default App