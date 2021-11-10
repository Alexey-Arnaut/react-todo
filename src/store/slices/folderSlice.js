import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { collection, getDocs, query, addDoc } from "firebase/firestore";

export const getFolders = createAsyncThunk("folders/getFolders", async () => {
  const querySnapshot = await getDocs(query(collection(db, "folders")));

  const data = [];

  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
});

export const addNewFolder = createAsyncThunk(
  "folders/addNewFolder",
  async (title, { dispatch }) => {
    const docRef = await addDoc(collection(db, "folders"), {
      title: title,
    });

    dispatch(folders({ title: title, id: docRef.id }));
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

const { folders } = folderSlice.actions;
export default folderSlice.reducer;
