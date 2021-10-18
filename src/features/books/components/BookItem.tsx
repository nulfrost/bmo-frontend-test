import { FunctionComponent } from "react";
import { Text } from "src/components";

type Props = {
  title: string;
  cover: string;
  author: string;
  publishDate?: string;
};

export const BookItem: FunctionComponent<Props> = ({
  title,
  cover,
  author,
  publishDate,
}) => {
  const getAuthors = (authorArray) => {
    if (typeof authorArray === "undefined") {
      return "Unknown";
    }
    return authorArray.map((author) => author);
  };

  return (
    <div>
      <Text as="h2" fontSize="1.2rem">
        {title}
      </Text>
      <img src={cover} />
      <footer>
        <Text as="small" fontSize="0.8rem">
          {getAuthors(author)}
        </Text>
        <Text as="time" fontSize="0.8rem">
          {publishDate}
        </Text>
      </footer>
    </div>
  );
};
