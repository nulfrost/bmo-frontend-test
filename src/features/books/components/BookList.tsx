import { Text } from "src/components";
import { useBooks } from "src/features/books/api/getBooks";

export const BookList = () => {
  const books = useBooks("harry potter");

  console.log(books);

  if (books.isLoading) {
    return (
      <Text as="small" fontSize="2rem">
        Loading books...
      </Text>
    );
  }

  if (!books.data)
    return (
      <Text as="small" fontSize="2rem">
        Oops! No results match your query.
      </Text>
    );

  return <section>test</section>;
};
