import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getTodos = createAsyncThunk("todos/getTodos", async (folderId) => {
  const querySnapshot = await getDocs(
    query(collection(db, "todos"), where("folderId", "==", folderId))
  );

  const data = [];

  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: null,
  },
  extraReducers: {
    [getTodos.pending]: (state) => {
      state.status = "pending";
    },
    [getTodos.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.todos = action.payload;
    },
  },
});

export default todosSlice.reducer;
