import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

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

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async ({ title, folderId }, { dispatch }) => {
    const docRef = await addDoc(collection(db, "todos"), {
      title: title,
      folderId: folderId,
      completed: false,
    });

    dispatch(todos({ title: title, id: docRef.id }));
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/removeTodo",
  async (id, { dispatch }) => {
    await deleteDoc(doc(db, "todos", id));

    dispatch(remove(id));
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: null,
  },
  reducers: {
    todos(state, action) {
      state.todos.push(action.payload);
    },
    remove(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
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

const { todos, remove } = todosSlice.actions;
export default todosSlice.reducer;
