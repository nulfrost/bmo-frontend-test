import { useQuery } from "react-query";
import { axios } from "src/lib/axios";

export const getBooks = (query: string): Promise<any> => {
  return axios.get(
    `search.json?q=${query}&fields=title,author_name,key,isbn,publish_date,first_publish_year`
  );
};

export const useBooks = (query: string) => {
  return useQuery({
    queryKey: ["books", query],
    queryFn: () => getBooks(query),
  });
};
