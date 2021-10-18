import { useQuery } from "react-query";
import { axios } from "src/lib/axios";

const formatQuery = (query: string) => query.split(" ").join("+");

export const getBooks = (query: string) => {
  const formattedQuery = formatQuery(query);
  return axios.get(`search.json?q=${formattedQuery}`);
};

export const useBooks = (query: string) => {
  return useQuery({
    queryKey: ["books", query],
    queryFn: () => getBooks(query),
  });
};
