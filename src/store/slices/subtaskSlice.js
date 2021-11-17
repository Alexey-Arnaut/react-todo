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

export const getSubtasks = createAsyncThunk(
  "subtasks/getSubtasks",
  async ({ todoId, userId }) => {
    const querySnapshot = await getDocs(
      query(
        collection(db, "subtasks"),
        where("todoId", "==", todoId),
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

export const addNewSubtask = createAsyncThunk(
  "subtasks/addNewSubtask",
  async ({ title, todoId, userId, time }, { dispatch }) => {
    const docRef = await addDoc(collection(db, "subtasks"), {
      title: title,
      todoId: todoId,
      userId: userId,
      completed: false,
      time: time,
    });

    dispatch(subtasks({ title: title, id: docRef.id }));
  }
);

export const deleteSubtask = createAsyncThunk(
  "subtasks/deleteSubtask",
  async (id, { dispatch }) => {
    await deleteDoc(doc(db, "subtasks", id));

    dispatch(remove(id));
  }
);

export const changeStateSubtask = createAsyncThunk(
  "subtasks/changeStateSubtask",

  async ({ id, completed }, { dispatch }) => {
    dispatch(changeState({ id, completed }));

    await updateDoc(doc(db, "subtasks", id), {
      completed: !completed,
    });
  }
);

export const changeNameSubtask = createAsyncThunk(
  "todos/changeNameSubtask",
  async ({ title, id }, { dispatch }) => {
    dispatch(changeName({ title, id }));

    await updateDoc(doc(db, "subtasks", id), {
      title: title,
    });
  }
);

const subtaskSlice = createSlice({
  name: "subtasks",
  initialState: {
    subtasks: [],
    status: null,
  },
  reducers: {
    subtasks(state, action) {
      state.subtasks.push(action.payload);
    },
    remove(state, action) {
      state.subtasks = state.subtasks.filter(
        (subtask) => subtask.id !== action.payload
      );
    },
    changeState(state, action) {
      state.subtasks.find(
        (subtask) => subtask.id === action.payload.id
      ).completed = !action.payload.completed;
    },
    changeName(state, action) {
      state.subtasks.find((subtask) => subtask.id === action.payload.id).title =
        action.payload.title;
    },
  },
  extraReducers: {
    [getSubtasks.pending]: (state) => {
      state.status = "pending";
    },
    [getSubtasks.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.subtasks = action.payload;
    },
  },
});

const { subtasks, remove, changeState, changeName } = subtaskSlice.actions;
export default subtaskSlice.reducer;
