import { QUERY_KEY } from "../../constants";
import { useQuery } from "@tanstack/react-query";

export const useGetAllPokemons = () => {
  const res = useQuery({
    queryKey: [QUERY_KEY.ALL_POKEMONS],
    queryFn: async () => {
      const response = await fetch(
        `${process?.env?.NEXT_PUBLIC_POKEMON_BASE_URL}`
      );
      const data = await response.json();
      return data;
    },
  });
  return res;
};

export const useGetSinglePokemon = (id: string) => {
  const res = useQuery({
    queryKey: [
      "pokemon",
      `${process?.env?.NEXT_PUBLIC_POKEMON_BASE_URL}/${id}`,
    ],
    queryFn: async () => {
      const response = await fetch(
        `${process?.env?.NEXT_PUBLIC_POKEMON_BASE_URL}/${id}`
      );
      const data = await response.json();
      return data;
    },
  });
  return res;
};
