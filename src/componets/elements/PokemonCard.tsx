"use client";
import Link from "next/link";
import styled from "styled-components";

type PokemonCardProps = {
  name: string;
  image: string;
  types: { type: { name: string } }[];
  stats?: { stat: { name: string }; base_stat: number }[];
  abilities?: { ability: { name: string } }[];
  id: string;
};

export const PokemonCard = ({
  name,
  image,
  types,
  id,
  ...otherProps
}: PokemonCardProps) => {
  return (
    <CardContainer href={`${process?.env.NEXT_PUBLIC_BASE_URL}/pokemons/${id}`}>
      {image && (
        <ImageWrapper>
          <PokemonImage src={image} alt={name} />
        </ImageWrapper>
      )}
      <PokemonName>{name}</PokemonName>
      <PokemonDetails>
        {otherProps.stats && (
          <DetailItem>
            Stats:{" "}
            {otherProps.stats
              .map((stat) => stat.stat.name + ": " + stat.base_stat)
              .join(", ")}
          </DetailItem>
        )}
        {otherProps.abilities && (
          <DetailItem>
            Abilities:{" "}
            {otherProps.abilities
              .map((ability) => ability.ability.name)
              .join(", ")}
          </DetailItem>
        )}
      </PokemonDetails>
      <PokemonTypeContainer>
        {types.map((type) => (
          <PokemonType key={type.type.name}>{type.type.name}</PokemonType>
        ))}
      </PokemonTypeContainer>
    </CardContainer>
  );
};

const CardContainer = styled(Link)`
  background-color: #000;
  border-radius: 4px;
  border: 1px solid #eee;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  text-align: center;
  margin-bottom: 1rem;
`;

const PokemonImage = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PokemonName = styled.h3`
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
`;

const PokemonDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DetailItem = styled.li`
  margin-bottom: 0.5rem;
  text-transform: capitalize;
`;

const PokemonTypeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const PokemonType = styled.span`
  background-color: #eee;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: #333;
`;
