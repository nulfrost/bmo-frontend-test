import { FunctionComponent } from "react";
import { Text } from "src/components";

type Props = {
  title: string;
  isbnNumbers: string[];
  author: string;
  publishDate?: string;
  publishYear?: string;
};

export const BookItem: FunctionComponent<Props> = ({
  title,
  isbnNumbers,
  author,
  publishDate,
  publishYear,
}) => {
  const getAuthors = (authorArray) => {
    if (typeof authorArray === "undefined") {
      return "Unknown Author";
    }
    return authorArray[0];
  };

  const getBookCover = (isbn, title) => {
    if (typeof isbn === "undefined") {
      return `https://via.placeholder.com/323x400.webp?text=${title}`;
    }
    return `https://covers.openlibrary.org/b/isbn/${isbn[0]}-L.jpg`;
  };

  return (
    <article
      style={{ display: "flex", flexDirection: "column" }}
      data-testid="book"
    >
      <Text as="h2" fontSize="1.2rem">
        {title}
      </Text>
      <img
        style={{ height: "auto", width: "100%" }}
        src={getBookCover(isbnNumbers, title)}
        height={500}
        width={323}
        alt={`Book cover for ${title}`}
      />
      <footer
        style={{
          marginTop: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Text as="small" fontSize="0.8rem">
          {getAuthors(author)}
        </Text>
        <Text as="time" fontSize="0.8rem">
          {publishYear}
        </Text>
      </footer>
    </article>
  );
};
