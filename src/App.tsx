import React, { useRef, useState } from "react";
import { Button, InputField, MainLayout, Form, Text } from "src/components";
import { BookList } from "src/features/books/components";

function App() {
  const [bookQuery, setBookQuery] = useState<string | undefined>("");
  const [sort, setSort] = useState<string>("title");

  const searchRef = useRef<HTMLInputElement | null>(null);

  const onSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event?.target?.value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setBookQuery(searchRef?.current?.value);
  };

  return (
    <MainLayout>
      <Text as="h1" fontSize="1.5rem">
        Search
      </Text>
      <Form onSubmit={onSubmit}>
        <InputField
          srOnly
          type="search"
          name="book"
          label="Search"
          ref={searchRef}
          placeholder="Search for a book"
          aria-label="Search through thousands of books"
        />
        <label htmlFor="sortType">Sort By</label>
        <select
          onChange={onSortChange}
          defaultValue="title"
          name="sortType"
          id="sortType"
          style={{ display: "block" }}
        >
          Sort By:
          <option value="date">Date</option>
          <option value="title">Title</option>
        </select>
        <Button type="submit">Find</Button>
      </Form>
      <BookList query={bookQuery} sort={sort} />
    </MainLayout>
  );
}

export default App;
