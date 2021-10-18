import React, { useRef, useState } from "react";
import { Button, InputField, MainLayout, Form, Text } from "src/components";
import { BookList } from "src/features/books/components";

function App() {
  const [bookQuery, setBookQuery] = useState<string | undefined>("");

  const searchRef = useRef<HTMLInputElement | null>(null);

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
          label="Search for book"
          ref={searchRef}
          placeholder="Search for a book"
        />
        <Button type="submit">Find</Button>
      </Form>
      <BookList query={bookQuery} />
    </MainLayout>
  );
}

export default App;
