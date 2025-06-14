// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PokemonDetail from './pages/PokemonDetail';
import GlobalStyle from './styles/GlobalStyles';
import { PokemonProvider } from './contexts/PokemonContext'; // Importa o Provedor
import PokemonCard from './components/PokemonCard';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeTogglerButton } from './components/ThemeTogglerButton';

function App() {
  const jean = "Jean"
  const obj = {numero1:2 , numero:1}
  return (

    <ThemeProvider>
      <ThemeTogglerButton/>
       {/* BrowserRouter habilita o roteamento do lado do cliente */}
      <ThemeProvider>
        <ThemeTogglerButton/>
        <Router>
          {/* Aplica estilos globais */}
          <GlobalStyle />
          {/* alterado devido a perda da lista de pokemons ao voltar neste componente */}
          {/* Envolve as rotas com o PokemonProvider para que o estado seja compartilhado */}
          <PokemonProvider>
            {/* <PokemonCard/> */}
            {/* Routes define os caminhos para diferentes componentes */}
            <Routes>
              {/* Rota para a página inicial (lista de Pokémons) */}
              <Route path="/" element={<Home />} />
              {/* Rota para a página de detalhes do Pokémon, com um parâmetro dinâmico 'name' */}
              <Route path="/pokemon/:name" element={<PokemonDetail />} />
            </Routes>
          </PokemonProvider>
        </Router>
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;