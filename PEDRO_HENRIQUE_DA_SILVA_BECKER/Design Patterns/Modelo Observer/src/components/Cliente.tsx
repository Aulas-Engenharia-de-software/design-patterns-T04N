import React, { useEffect, useRef, useState } from 'react';
import { loja } from './Loja';

interface ClienteProps {
  nome: string;
}

export const Cliente: React.FC<ClienteProps> = ({ nome }) => {
  const [notificacoes, setNotificacoes] = useState<string[]>([]);
  const [registro, setRegistro] = useState<boolean>(false);
  const notificacoesRef = useRef<string[]>([]);

  useEffect(() => {
    const attNotificacoes = () => {
      const notificacoes = loja.getNotificacoes();
      const novaNotificacao = notificacoes[notificacoes.length - 1];
      notificacoesRef.current = [...notificacoesRef.current, novaNotificacao];
      setNotificacoes([...notificacoesRef.current]);
    };

    if(registro){
      loja.registrar(nome, attNotificacoes);
    }else{
      loja.cancelar(nome);
      notificacoesRef.current = [];
      setNotificacoes([]);
    }

    return () => {
      loja.cancelar(nome);
    };
  }, [registro, nome]);

  const registroCliente = () => {
    setRegistro((prev) => !prev);
  };

  return (
    <div className="cliente">
      <h3>{nome}</h3>
      <button onClick={registroCliente}>{registro? 'Cancelar registro' : 'Registrar-se'}</button>
      <ul>
        {notificacoes.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};