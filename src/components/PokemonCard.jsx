// src/components/PokemonCard.js
import React from 'react';
import { PokemonCardWrapper } from '../styles/ListStyles';
import { useNavigate } from 'react-router-dom';
import { usePokemonContext } from '../contexts/PokemonContext';

// Component to display a single Pokemon in the list
const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const {pokemons:newname,loading,hasMore,handleLoadMore}  = usePokemonContext()
  // console.log(newname)

  // Function to handle click on a Pokemon card
  const handleClick = () => {
    // Navigate to the detail page, passing the Pokemon name as a parameter
    navigate(`/pokemon/${pokemon.name}`);
  };


  return (
    <PokemonCardWrapper onClick={handleClick}>
      {/* Display Pokemon image (using a generic sprite URL, you might need to adjust) */}
        <img
         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
          alt={pokemon.name}
        />
      {/* Display Pokemon name */}
      <h3>{pokemon.name}</h3>
      {/* Entrou no pokemon card */}
    </PokemonCardWrapper>
  );
};

export default PokemonCard;