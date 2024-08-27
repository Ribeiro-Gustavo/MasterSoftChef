import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { obterReceitas } from '../../api';
import './listareceita.css';

function ListaReceitas() {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    obterReceitas().then((dados) => setReceitas(dados));
  }, []);

  return (
    <div className="lista">
      <header className="header">
        MasterSoftChef
      </header>
      <h1>Lista de Receitas</h1>
      <ul>
        {receitas.map((receita) => (
          <li key={receita.id}>
            <Link to={`/receita/${receita.id}`}>{receita.titulo}</Link>
          </li>
        ))}
      </ul>
      <Link to="/adicionar">Adicionar Nova Receita</Link>
    </div>
  );
}

export default ListaReceitas;
