import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { obterReceitaPorId } from '../../api';

function DetalhesReceita() {
  const { id } = useParams();
  const [receita, setReceita] = useState(null);

  useEffect(() => {
    obterReceitaPorId(id).then((dados) => setReceita(dados));
  }, [id]);

  if (!receita) return <div>Carregando...</div>;

  return (
    <div>
      <h1>{receita.titulo}</h1>
      <h3>Ingredientes:</h3>
      <ul>
        {receita.ingredientes.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </ul>
      <h3>Modo de Preparo:</h3>
      <p>{receita.modoPreparo}</p>
    </div>
  );
}

export default DetalhesReceita;
