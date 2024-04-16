"use client";
import CategoryCard from "@/componets/elements/CategoryCard";
import SearchBar from "@/componets/elements/Search";
import Spinner from "@/componets/elements/Spinner";
import {
  useGetCategories,
  useGetCategoryDetails,
  useGetPokemonsForEachCategory,
} from "@/data/categories.data";
import { useMemo } from "react";
import styled from "styled-components";
import { colors } from "../../constants";

export default () => {
  const { data, isLoading, isError } = useGetCategories();

  const query = useGetCategoryDetails(data?.results || []);

  const categoriesWithDetails = useMemo(() => {
    if (!query?.data) return [];

    const pokemons = query.data.map((category: any) => {
      return category?.pokemon.map((pokemon: any) => {
        return pokemon.pokemon;
      });
    });

    return pokemons.flat() || [];
  }, [query?.data]);

  const {
    data: pokemons,
    error,
    pending,
  } = useGetPokemonsForEachCategory(categoriesWithDetails || []);

  const showLoader = isLoading || query?.pending || pending;

  if (showLoader) return <Spinner size="40px" />;

  if (isError || query?.error) return <h1>Something went wrong</h1>;

  return (
    <Container>
      <Heading>Select A Category</Heading>
      <SearchBar
        placeholder="Search Pokemon"
        onSearch={(searchTerm: any) => console.log(searchTerm)}
        pokemons={pokemons}
      />
      <GridContainer>
        {query?.data.map((category) => (
          <CategoryCard
            id={category.id}
            bg={colors[Math.floor(Math.random() * colors.length)]}
            key={category.name}
            title={category.name}
            totalPokemons={category.pokemon.length}
          />
        ))}
      </GridContainer>
    </Container>
  );
};

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
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;
