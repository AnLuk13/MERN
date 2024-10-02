import { Route, Routes } from "react-router-dom";
import CreateBooks from "./pages/CreateBooks.jsx";
import DeleteBooks from "./pages/DeleteBooks.jsx";
import EditBook from "./pages/EditBook.jsx";
import ShowBook from "./pages/ShowBook.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <div className="bg-gray-100 max-h-full h-[100vh]">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CreateBooks />} path="/books/create" />
        <Route element={<ShowBook />} path="/books/details/:id" />
        <Route element={<EditBook />} path="/books/edit/:id" />
        <Route element={<DeleteBooks />} path="/books/delete/:id" />
      </Routes>
    </div>
  );
}

export default App;
