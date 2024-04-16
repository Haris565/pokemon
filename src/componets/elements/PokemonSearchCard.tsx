"use client";
import Link from "next/link";
import styled from "styled-components";

type PokemonCardProps = {
  name: string;
  image: string;
  id: string;
};

export const PokemonSearchCard = ({ name, image, id }: PokemonCardProps) => {
  return (
    <CardContainer href={`${process?.env.NEXT_PUBLIC_BASE_URL}/pokemons/${id}`}>
      {image && (
        <ImageWrapper>
          <PokemonImage src={image} alt={name} />
        </ImageWrapper>
      )}
      <PokemonName>{name}</PokemonName>
    </CardContainer>
  );
};

const CardContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 6px;
`;

const ImageWrapper = styled.div`
  width: 50px;
  height: 50px;
`;

const PokemonImage = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PokemonName = styled.h3`
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: normal;
  color: #fff;
  margin-left: 5px;
`;
