import { Text, Grid } from "src/components";
import { useBooks } from "src/features/books/api/getBooks";
import { BookItem } from "./BookItem";

export const BookList = ({
  query,
  sort,
}: {
  query: string | undefined;
  sort: string;
}) => {
  const books = useBooks(query || "harry potter");

  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }

  const sortBooks = (books: any, sortValue: string) => {
    switch (sortValue) {
      case "title":
        return books.sort((a, b) => a?.title?.localeCompare(b?.title));
      case "date":
        return books.sort(
          (a, b) => a?.first_publish_year - b?.first_publish_year
        );
      default:
        return books;
    }
  };

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
      <Grid>
        {sortBooks(getUniqueListBy(books?.data?.data?.docs, "title"), sort).map(
          ({ key, title, author_name, isbn, publish_date }) => (
            <BookItem
              key={key}
              title={title}
              author={author_name}
              isbnNumbers={isbn}
              publishDate={publish_date}
            />
          )
        )}
      </Grid>
    </section>
  );
};
