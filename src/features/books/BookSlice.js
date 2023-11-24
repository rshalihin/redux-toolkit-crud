import { createSlice } from "@reduxjs/toolkit";

// Declare initial book
const initialBook = {
  books: [
    { id: 1, title: "Love Bangladesh", author: "Readush" },
    { id: 2, title: "Soil of Bangladesh", author: "Shalihin" },
    { id: 3, title: "Six Season of Bangladesh", author: "Sonia" },
  ],
};

// Create Reducer Action in CreateSlice and Export
export const bookSlice = createSlice({
  name: "books",
  initialState: initialBook,
  reducers: {
    // Action for showing book list.
    showBook: (state) => state,

    // Action for adding book in list.
    addBook: (state, action) => {
      state.books.push(action.payload);
    },

    // Action for updateing existing book.
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExist = state.books.filter((book) => book.id === id);
      if (isBookExist) {
        isBookExist[0].title = title;
        isBookExist[0].author = author;
      }
    },

    // Action for Deleting book from list.
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

// Export all action
export const { showBook, addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
