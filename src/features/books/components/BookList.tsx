import { Text } from "src/components";
import { useBooks } from "src/features/books/api/getBooks";
import { BookItem } from "./BookItem";

export const BookList = ({ query }: { query: string | undefined }) => {
  const books = useBooks(query || "harry potter");

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

  return (
    <section>
      {books?.data?.data?.docs?.map((book) => (
        <BookItem
          key={book?.key}
          title={book?.title}
          author={book?.author}
          cover={book?.cover_i}
        />
      ))}
    </section>
  );
};
