import { InputField, MainLayout } from "src/components";
import { BookList } from "src/features/books/components";

function App() {
  return (
    <MainLayout>
      <form>
        <InputField type="search" name="book" label="Search for book" />
      </form>
      <BookList />
    </MainLayout>
  );
}

export default App;
