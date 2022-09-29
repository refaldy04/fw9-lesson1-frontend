import { createSlice } from '@reduxjs/toolkit';
import { editMessage, getAllMessage, getMessage } from '../asyncActions/message';

const initialState = {
  dataMessage: {},
  dataTable: [],
  pageInfo: {},
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(editMessage.fulfilled, (state, action) => {
      console.log('ini dari redicers user', action.payload);
      state.dataMessage = action.payload;
    });

    build.addCase(getAllMessage.fulfilled, (state, action) => {
      console.log('ini dari redicers user', action.payload);
      state.dataTable = action.payload.result;
      state.pageInfo = action.payload.pageInfo;
    });

    build.addCase(getMessage.fulfilled, (state, action) => {
      console.log('ini dari redicers user', action.payload);
      state.dataMessage = action.payload;
    });
  },
});

export default messageSlice.reducer;
