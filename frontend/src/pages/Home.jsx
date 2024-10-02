import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
  const [count, setCount] = useState(0);
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setCount(response.data.count);
        setBooks(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-500 px-4 py-1 rounded-lg"
          style={showType === "table" ? { background: "violet" } : {}}
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-500 px-4 py-1 rounded-lg"
          style={showType === "card" ? { background: "violet" } : {}}
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-4">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      <div className={"my-4"}>
        {isLoading ? "Loading..." : <h2>Count: {count}</h2>}
      </div>

      {isLoading ? (
        <div className={"flex justify-center"}>
          <Spinner />
        </div>
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
