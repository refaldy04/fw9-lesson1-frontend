import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import qs from 'qs';

export const getAllMessage = createAsyncThunk('message/getAllMessage', async (request) => {
  try {
    const url = `http://localhost:3314/contactUs?` + request;
    const { data } = await axios.get(url);
    console.log('ini dari asyncAction', data);
    return data;
  } catch (e) {
    console.log(e);
  }
});

export const getMessage = createAsyncThunk('message/getMessage', async (request) => {
  try {
    const url = `http://localhost:3314/contactUs` + request;
    const { data } = await axios.get(url);
    console.log('ini dari asyncAction', data);
    return data;
  } catch (e) {
    console.log(e);
  }
});

export const createMessage = createAsyncThunk('message/createMessage', async (request) => {
  try {
    const url = `http://localhost:3314/contactUs/`;
    const { data } = await axios.post(url, request);
    console.log('ini dari asyncAction', request);
    return data;
  } catch (e) {
    console.log(e);
  }
});

export const editMessage = createAsyncThunk(
  'message/editMessage', // nama action harus unique
  async (request) => {
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

export const deleteMessage = createAsyncThunk(
  'message/deleteMessage', // nama action harus unique
  async (request) => {
    try {
      const url = `http://localhost:3314/contactUs/${request}`;
      const { data } = await axios.delete(url);
      console.log('ini dari asyncAction', data);
      return data;
    } catch (e) {
      console.log(e);
    }
  } // fungsi untuk mengambil data
);
