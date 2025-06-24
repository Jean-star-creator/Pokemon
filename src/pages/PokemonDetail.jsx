// src/pages/PokemonDetail.jsx
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';
import {
  DetailContainer,
  DetailImage,
  DetailName,
  AbilitiesList,
  HomeButton,
  MovesList,
} from '../styles/DetailStyles';
import { ThemeContext } from '../contexts/ThemeContext';
import { pokemonsMainPagePath } from '../globalVariables';

const PokemonDetail = () => {
  // Obtém o nome do Pokémon dos parâmetros da URL
  const { name } = useParams();
  // Estado para armazenar os detalhes do Pokémon selecionado
  const [pokemonDetails, setPokemonDetails] = useState(null);
  console.log(pokemonDetails)
  // Estado para gerenciar o estado de carregamento
  const [loading, setLoading] = useState(true);
  // Estado para gerenciar o estado de erro
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {currentTheme,setCurrrentTheme} = useContext(ThemeContext)
  // useEffect para buscar os detalhes do Pokémon quando o componente é montado ou o nome muda
  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        // Faz uma chamada à API para obter os detalhes do Pokémon específico
        const response = await api.get(`/pokemon/${name}`);
        setPokemonDetails(response.data);
      } catch (err) {
        console.error('Erro ao buscar detalhes do Pokémon:', err);
        setError('Falha ao carregar os detalhes do Pokémon. Por favor, tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [name]); // Dependência: busca novamente se o nome do Pokémon na URL mudar

  if (loading) {
    return <DetailContainer>Carregando detalhes do Pokémon...</DetailContainer>;
  }

  if (error) {
    return <DetailContainer>{error}</DetailContainer>;
  }

  if (!pokemonDetails) {
    return <DetailContainer>Pokémon não encontrado.</DetailContainer>;
  }

  return (
    <DetailContainer style={{color:currentTheme.color , backgroundColor:currentTheme.background}}>
      {/* Exibe a imagem do Pokémon */}
      <DetailImage
        src={pokemonDetails.sprites.front_default}
        alt={pokemonDetails.name}
      />
      {/* Exibe o nome do Pokémon */}
      <DetailName>{pokemonDetails.name}</DetailName>

      <h3>Habilidades:</h3>
      {/* Exibe uma lista de habilidades do Pokémon */}
      <AbilitiesList>
        {pokemonDetails.abilities.map((abilityInfo) => (
          <li key={abilityInfo.ability.name}>{abilityInfo.ability.name}</li>
        ))}
      </AbilitiesList>
      <h3>Movimentos:</h3>
      <MovesList>
        {pokemonDetails.abilities.map((moveInfo) => {
          return(
          <li key={moveInfo.ability.name}>{moveInfo.ability.name}</li>
        )})}
      </MovesList>
      {/* Botão para voltar para a página inicial */}
      {/* <HomeButton onClick={() => navigate('/')}>Voltar para a Lista</HomeButton> */}
      <HomeButton onClick={() => navigate(`/${pokemonsMainPagePath}`)}>Voltar para a Lista</HomeButton>
    </DetailContainer>
  );
};

export default PokemonDetail;