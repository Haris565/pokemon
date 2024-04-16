import { useQueries, useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../constants";

type data = {
  name: string;
  url: string;
};

export const useGetCategories = () => {
  const res = useQuery({
    queryKey: [QUERY_KEY.ALL_CATEGORIES],
    queryFn: async () => {
      const response = await fetch(process?.env.NEXT_PUBLIC_CATEGORY_URL!);
      const data = await response.json();
      return data;
    },
  });

  return res;
};

export const useGetCategoryDetails = (data: data[] | []) => {
  const results = useQueries({
    queries: data?.map(({ url }) => ({
      queryKey: ["category", url],
      queryFn: async () => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      },
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
        error: results.find((result) => result.isError),
      };
    },
  });

  return results;
};

export const useGetSingleCategory = (id: string) => {
  const res = useQuery({
    queryKey: ["category", `${id}`],
    queryFn: async () => {
      const response = await fetch(
        `${process?.env.NEXT_PUBLIC_CATEGORY_URL!}/${id}`
      );
      const data = await response.json();
      return data;
    },
  });

  return res;
};

export const useGetPokemonsForEachCategory = (data: data[] | []) => {
  const results = useQueries({
    queries: data?.map((pokemon: any) => ({
      queryKey: ["pokemon", pokemon?.url],
      queryFn: async () => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
      },
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
        error: results.find((result) => result.isError),
      };
    },
  });

  return results;
};
