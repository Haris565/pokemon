import { useQueryClient } from "@tanstack/react-query";
import { useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { QUERY_KEY } from "../../../constants";
import { useGetPokemonsForEachCategory } from "@/data/categories.data";
import { PokemonSearchCard } from "./PokemonSearchCard";

const SearchBar = ({ placeholder, pokemons }: any) => {
  const [text, setText] = useState("");

  const filteredPokemons = useMemo(() => {
    if (!text) return [];
    return pokemons.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(text.toLowerCase())
    );
  }, [text, pokemons]);

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {filteredPokemons.length > 0 && !!text && (
        <FilteredItemList>
          {filteredPokemons.map((pokemon: any, idx: any) => (
            <PokemonSearchCard
              key={`${pokemon.name + idx}`}
              name={pokemon.name}
              id={pokemon?.id}
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
            />
          ))}
        </FilteredItemList>
      )}
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  position: relative;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: 8px 12px;
  outline: none;
  border-radius: 4px;
  background-color: #1f2937;
`;

const FilteredItemList = styled.div`
  position: absolute;
  width: 300px;
  height: 200px;
  background-color: #1f2937;
  overflow-y: auto;
  z-index: 1;
  top: 40px;
  border-radius: 4px;
`;
