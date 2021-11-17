import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  query,
  addDoc,
  where,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export const getFolders = createAsyncThunk(
  "folders/getFolders",
  async (userId) => {
    const querySnapshot = await getDocs(
      query(collection(db, "folders"), where("userId", "==", userId))
    );

    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  }
);

export const addNewFolder = createAsyncThunk(
  "folders/addNewFolder",
  async ({ title, userId, time }, { dispatch }) => {
    const docRef = await addDoc(collection(db, "folders"), {
      title: title,
      userId: userId,
      time: time,
    });

    dispatch(folders({ title: title, id: docRef.id }));
  }
);

export const deleteFolder = createAsyncThunk(
  "folders/deleteFolder",
  async (folderId, { dispatch }) => {
    await deleteDoc(doc(db, "folders", folderId));

    dispatch(remove(folderId));
  }
);

export const changeNameFolder = createAsyncThunk(
  "todos/changeNameFolder",
  async ({ title, id }, { dispatch }) => {
    dispatch(changeName({ title, id }));

    await updateDoc(doc(db, "folders", id), {
      title: title,
    });
  }
);

const folderSlice = createSlice({
  name: "folders",
  initialState: {
    folders: [],
    status: null,
  },
  reducers: {
    folders(state, action) {
      state.folders.push(action.payload);
    },
    remove(state, action) {
      state.folders = state.folders.filter(
        (folder) => folder.id !== action.payload
      );
    },
    changeName(state, action) {
      state.folders.find((folder) => folder.id === action.payload.id).title =
        action.payload.title;
    },
  },
  extraReducers: {
    [getFolders.pending]: (state) => {
      state.status = "pending";
    },
    [getFolders.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.folders = action.payload;
    },
  },
});

const { folders, remove, changeName } = folderSlice.actions;
export default folderSlice.reducer;
