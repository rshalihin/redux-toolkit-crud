import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./BookSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  // create state for taking input value
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const bookid = Math.floor(Math.random() * 10000).toString();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: bookid, title, author };
    dispatch(addBook(book));
    navigate("/show-books", { replace: true });
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="book-name">Books Title : </label>
        <input
          type="text"
          name="book-name"
          id="book-name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="author">Author : </label>
        <input
          type="text"
          name="author"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
