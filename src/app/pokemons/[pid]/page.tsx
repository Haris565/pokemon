"use client";

import BarChart from "@/componets/elements/BarChart";
import Spinner from "@/componets/elements/Spinner";
import { useGetSinglePokemon } from "@/data/pokemons.data";
import { useParams } from "next/navigation";
import styled from "styled-components";

export default function Page() {
  const params = useParams();

  const id = params.pid as string;

  const { data: pokemon, error, isLoading } = useGetSinglePokemon(id);

  if (isLoading) return <Spinner size="40px" />;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Container>
        <Image
          src={
            pokemon.sprites.front_default ||
            pokemon.sprites.back_default ||
            pokemon.sprites.front_shiny ||
            pokemon.sprites.back_shiny ||
            pokemon.sprites.back_female ||
            pokemon.sprites.front_female ||
            pokemon.sprites.front_shiny_female ||
            pokemon.sprites.back_shiny_female
          }
          alt={pokemon.name}
        />
        <Name>{pokemon.name}</Name>
        <PokemonTypeContainer>
          {pokemon.types.map((type: any) => (
            <PokemonType key={type.type.name}>{type.type.name}</PokemonType>
          ))}
        </PokemonTypeContainer>
        <Details>
          <li>
            Height: <span>{pokemon.height} m</span>
          </li>
          <li>
            Weight: <span>{pokemon.weight} kg</span>
          </li>
        </Details>

        <BarChart stats={pokemon?.stats} />

        <Heading>Abilities</Heading>
        <AbilityList>
          {pokemon.abilities.map((ability: any) => (
            <AbilityItem key={ability.ability.name}>
              {ability.ability.name}
            </AbilityItem>
          ))}
        </AbilityList>

        <Heading>Moves</Heading>
        <MovesList>
          {pokemon.moves.map((move: any) => (
            <MovesItem key={move.move.name}>{move.move.name}</MovesItem>
          ))}
        </MovesList>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 700px;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin-bottom: 2rem;
`;

const Name = styled.h1`
  font-size: 2rem;
  text-transform: capitalize;
  margin-bottom: 1rem;
`;

const Details = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px auto 0px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;

  li {
    width: 48%;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  span {
    font-weight: normal;
  }
`;

const MovesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  text-transform: capitalize;
  gap: 0.5rem 1rem;
`;

const MovesItem = styled.li`
  background-color: #eee;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: #333;
  text-transform: capitalize;
`;

const AbilityList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  width: 100%;
  text-transform: capitalize;
  gap: 0.5rem 1rem;
`;

const AbilityItem = styled.li`
  background-color: #eee;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: #333;
  text-transform: capitalize;
`;

const PokemonTypeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const PokemonType = styled.span`
  background-color: #eee;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: #333;
  text-transform: capitalize;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  margin: 20px 0 0px;
  text-transform: capitalize;
  text-align: start;
  width: 100%;
`;
