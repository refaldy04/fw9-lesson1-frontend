import { createSlice } from '@reduxjs/toolkit';
import { editMessage } from '../asyncActions/message';

const initialState = {
  id: null,
  dataMessage: {},
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
  extraReducers: (build) => {
    build.addCase(editMessage.fulfilled, (state, action) => {
      console.log('ini dari redicers user', action.payload);
      state.dataMessage = action.payload;
    });
  },
});

export const { selectDetail } = messageSlice.actions;

export default messageSlice.reducer;
