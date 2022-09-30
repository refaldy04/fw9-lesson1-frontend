import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import qs from 'qs';

export const getAllMessage = createAsyncThunk('message/getAllMessage', async (request) => {
  try {
    const url = `https://fw9-lesson1-backend-three.vercel.app/contactUs?` + request;
    const { data } = await axios.get(url);
    console.log('ini dari asyncAction', data);
    return data;
  } catch (e) {
    console.log(e);
  }
});

export const getMessage = createAsyncThunk('message/getMessage', async (request) => {
  try {
    const url = `https://fw9-lesson1-backend-three.vercel.app/contactUs/` + request;
    const { data } = await axios.get(url);
    console.log('ini dari asyncAction', data);
    return data;
  } catch (e) {
    console.log(e);
  }
});

export const createMessage = createAsyncThunk('message/createMessage', async (request) => {
  try {
    const send = qs.stringify(request.values);
    const url = `https://fw9-lesson1-backend-three.vercel.app/contactUs/`;
    const { data } = await axios.post(url, send);
    request.cb();
    console.log('ini dari asyncAction create', data);
    return data;
  } catch (e) {
    console.log('ini error asyncAction', e);
    return e.data.result[0].msg;
  }
});

export const editMessage = createAsyncThunk(
  'message/editMessage', // nama action harus unique
  async (request) => {
    const send = qs.stringify(request.message);
    console.log(send);
    try {
      const url = `https://fw9-lesson1-backend-three.vercel.app/contactUs/${request.id}`;
      const { data } = await axios.patch(url, send);
      console.log('ini dari asyncAction', data);
      return data;
    } catch (e) {
      console.log(e);
    }
  } // fungsi untuk mengambil data
);

export const deleteMessage = createAsyncThunk(
  'message/deleteMessage', // nama action harus unique
  async (request) => {
    try {
      const { data } = await axios.delete(`https://fw9-lesson1-backend-three.vercel.app/contactUs/${request.id}`);
      await request.cb();
      console.log('ini dari asyncAction', data);
      return data;
    } catch (e) {
      console.log(e);
    }
  } // fungsi untuk mengambil data
);
