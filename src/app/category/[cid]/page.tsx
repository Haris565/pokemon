"use client";

import { PokemonCard } from "@/componets/elements/PokemonCard";
import Spinner from "@/componets/elements/Spinner";
import {
  useGetPokemonsForEachCategory,
  useGetSingleCategory,
} from "@/data/categories.data";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import styled from "styled-components";

export default function Page() {
  const params = useParams();
  const id = params.cid as string;

  const { data, error, isLoading } = useGetSingleCategory(id);

  const normalizeData = useMemo(() => {
    if (!data) return [];
    return data.pokemon.map((data: any) => data.pokemon);
  }, [data]);

  const query = useGetPokemonsForEachCategory(normalizeData);

  if (isLoading || query?.pending) return <Spinner size="40px" />;

  if (error || query?.error) return <div>Error...</div>;

  return (
    <Container>
      <Heading> {query?.data?.length} Pokemon's Found</Heading>
      <GridContainer>
        {query.data.map((pokemon, idx) => (
          <PokemonCard
            id={pokemon?.id}
            key={pokemon?.id}
            name={pokemon?.name}
            image={
              pokemon.sprites.front_default ||
              pokemon.sprites.back_default ||
              pokemon.sprites.front_shiny ||
              pokemon.sprites.back_shiny ||
              pokemon.sprites.back_female ||
              pokemon.sprites.front_female ||
              pokemon.sprites.front_shiny_female ||
              pokemon.sprites.back_shiny_female
            }
            types={pokemon.types}
            abilities={pokemon.abilities}
          />
        ))}
      </GridContainer>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 1380px;
  padding: 1rem 2rem 2rem;
  @media (min-width: 640px) {
    padding: 1rem 3rem 2rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  padding: 20px 0;
  grid-template-columns: repeat(1, 1fr); /* one columns */
  grid-gap: 40px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Three columns on tablets */
  }
  @media (min-width: 1080px) {
    grid-template-columns: repeat(4, 1fr); /* Four columns on larger screens */
  }
`;

const Heading = styled.h1`
  text-align: right;
  margin-bottom: 20px;
`;
