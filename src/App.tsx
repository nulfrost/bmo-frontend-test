import React, { useRef, useState } from "react";
import { InputField, MainLayout } from "src/components";
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
      <form onSubmit={onSubmit}>
        <InputField
          type="search"
          name="book"
          label="Search for book"
          ref={searchRef}
        />
        <button type="submit">Send</button>
      </form>
      <BookList query={bookQuery} />
    </MainLayout>
  );
}

export default App;
