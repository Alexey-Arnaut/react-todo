import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/authSlice";
import folderReducer from "./slices/folderSlice";
import todoReducer from "./slices/todoSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    folders: folderReducer,
    todos: todoReducer,
  },
});
