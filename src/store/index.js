import { configureStore } from "@reduxjs/toolkit";
import folderReducer from "./slices/folderSlice";
import todoReducer from "./slices/todoSlice";

export default configureStore({
  reducer: {
    folders: folderReducer,
    todos: todoReducer,
  },
});
