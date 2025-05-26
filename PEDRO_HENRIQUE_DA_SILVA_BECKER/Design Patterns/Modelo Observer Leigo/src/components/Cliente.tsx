import React from 'react';

interface ClienteProps {
  nome: string;
  notificacoesCliente: string[];
}

export const Cliente: React.FC<ClienteProps> = ({ nome, notificacoesCliente }) => {
  return (
    <div className="cliente">
      <h3>{nome}</h3>
      <ul>
        {notificacoesCliente.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};