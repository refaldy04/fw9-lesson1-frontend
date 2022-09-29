import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    selectDetail: (state, action) => {
      console.log('ini payload select detail', action.payload);
      state.id = parseInt(action.payload);
    },
  },
});

export const { selectDetail } = messageSlice.actions;

export default messageSlice.reducer;
