// src/components/Search.jsx
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { usePokemonContext } from '../contexts/PokemonContext'; // Importa o hook do contexto
import { ThemeContext } from '../contexts/ThemeContext'; // Assume que ThemeContext está em contexts
import { Button } from './Button';

// Estilos para o componente de busca
const SearchContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    padding: 10px 15px;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    width: 300px;
    margin-right: 10px;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #007bff;
    }
  }

  button {
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #218838;
    }
  }
`;

export const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { pokemons, setFilteredPokemon, clearSearch } = usePokemonContext();
    const { currentTheme } = useContext(ThemeContext);

    const handleSearch = () => {
        // Converte o termo de busca para minúsculas para comparação case-insensitive 
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        //Procura o pokemon na lista atual 
        const foundPokemon = pokemons.find((pokemon) => {
            if (pokemon.name.toLowerCase() === lowerCaseSearchTerm){
                return(true)
                //return(pokemon.name.toLowerCase() === lowerCaseSearchTerm)
            }
            
        })
        
        //const foundPokemon = pokemons.find(pokemon => pokemon.name.toLowerCase() === lowerCaseSearchTerm); 

        if (foundPokemon) {
        //if (true) {
            // Se encontrado, define o Pokémon encontrado como o único a ser exibido
            setFilteredPokemon(foundPokemon);
        } else {
            // Se não encontrado, emite um alerta
            alert("Este pokemon não está na lista atual");
            // Opcional: limpar o filtro se a busca não retornar nada ou resetar o campo de busca
            clearSearch(); // Garante que a lista completa seja exibida novamente
        }
    };

    const handleClear = () => {
        setSearchTerm("");//Limpar o campo de Busca
        clearSearch("");//Limpa o filtro e reustaura a lista completa de pokemons
    }
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    }
    return (
        <SearchContainer >
            <input
                type="text"
                placeholder="Buscar Pokemon pelo nome..."
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value)
                }}
                onKeyDown={(handleKeyDown)}
            />
            <button
                onClick={handleSearch}
                style={{ backgroundColor: currentTheme.buttonBackground }}
            >
                Buscar 
            </button>
            <button
                onClick={handleClear}
                style={{ marginLeft: "10px", backgroundColor: "#dc3545" }}
            >
                Limpar
            </button>

        </SearchContainer>
    );
};
