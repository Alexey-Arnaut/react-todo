import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { collection, getDocs, query } from "firebase/firestore";

export const getFolders = createAsyncThunk("folders/getFolders", async () => {
  const querySnapshot = await getDocs(query(collection(db, "folders")));

  const data = [];

  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
});

const folderSlice = createSlice({
  name: "folders",
  initialState: {
    folders: [],
    status: null,
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

export default folderSlice.reducer;
