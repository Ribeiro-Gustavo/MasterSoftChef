import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListaReceitas from './pages/ListaReceitas/ListaReceitas';
import DetalhesReceita from './pages/DetalhesReceita/DetalhesReceita';
import AdicionarReceita from './pages/AdicionarReceita/AdicionarReceita';
import Header from './pages/header/header'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListaReceitas />} />
      <Route path="/receita/:id" element={<DetalhesReceita />} />
      <Route path="/adicionar" element={<AdicionarReceita />} />
      
    </Routes>
  );
}

export default App;
