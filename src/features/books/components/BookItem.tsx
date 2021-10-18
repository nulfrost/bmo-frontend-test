import { FunctionComponent } from "react";

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
  return <div>item</div>;
};
