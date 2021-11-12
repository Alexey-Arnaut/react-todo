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
  async ({ title, userId }, { dispatch }) => {
    const docRef = await addDoc(collection(db, "folders"), {
      title: title,
      userId: userId,
    });

    dispatch(folders({ title: title, id: docRef.id }));
  }
);

export const deleteFolder = createAsyncThunk(
  "folders/deleteFolder",
  async (folderId, { dispatch }) => {
    console.log(folderId);
    await deleteDoc(doc(db, "folders", folderId));

    dispatch(remove(folderId));
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

const { folders, remove } = folderSlice.actions;
export default folderSlice.reducer;
