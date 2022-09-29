import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import qs from 'qs';

export const editMessage = createAsyncThunk(
  'message/editMessage', // nama action harus unique
  async (request) => {
    console.log('abcd');
    const send = qs.stringify(request.message);
    console.log(send);
    try {
      const url = `http://localhost:3314/contactUs/${request.id}`;
      const { data } = await axios.patch(url, send);
      console.log('ini dari asyncAction', data);
      return data;
    } catch (e) {
      console.log(e);
    }
  } // fungsi untuk mengambil data
);
