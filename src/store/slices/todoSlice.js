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
  updateDoc,
} from "firebase/firestore";

export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async ({ folderId, userId }) => {
    const querySnapshot = await getDocs(
      query(
        collection(db, "todos"),
        where("folderId", "==", folderId),
        where("userId", "==", userId)
      )
    );

    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  }
);

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async ({ title, folderId, userId }, { dispatch }) => {
    const docRef = await addDoc(collection(db, "todos"), {
      title: title,
      folderId: folderId,
      userId: userId,
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

export const changeStateTodo = createAsyncThunk(
  "todos/changeStateTodo",

  async ({ id, completed }, { dispatch }) => {
    dispatch(changeState({ id, completed }));

    await updateDoc(doc(db, "todos", id), {
      completed: !completed,
    });
  }
);

export const changeNameTodo = createAsyncThunk(
  "todos/changeNameTodo",
  async ({ title, id }, { dispatch }) => {
    dispatch(changeName({ title, id }));

    await updateDoc(doc(db, "todos", id), {
      title: title,
    });
  }
);

export const setDescription = createAsyncThunk(
  "todos/setDescription",
  async ({ description, id }, { dispatch }) => {
    dispatch(addDescription({ description, id }));

    await updateDoc(doc(db, "todos", id), {
      description: description,
    });
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
    changeState(state, action) {
      state.todos.find((todo) => todo.id === action.payload.id).completed =
        !action.payload.completed;
    },
    changeName(state, action) {
      state.todos.find((todo) => todo.id === action.payload.id).title =
        action.payload.title;
    },
    addDescription(state, action) {
      state.todos.find((todo) => todo.id === action.payload.id).description =
        action.payload.description;
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

const { todos, remove, changeState, changeName, addDescription } =
  todosSlice.actions;
export default todosSlice.reducer;
