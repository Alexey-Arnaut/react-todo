import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    loginUser(state, action) {
      state.user = action.payload;
    },
    signOutUser(state) {
      state.user = null;
    },
  },
});

export const { loginUser, signOutUser } = userSlice.actions;
export default userSlice.reducer;
