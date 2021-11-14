import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/authSlice";
import folderReducer from "./slices/folderSlice";
import todoReducer from "./slices/todoSlice";
import subtaskReducer from "./slices/subtaskSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    folders: folderReducer,
    todos: todoReducer,
    subtasks: subtaskReducer,
  },
});
