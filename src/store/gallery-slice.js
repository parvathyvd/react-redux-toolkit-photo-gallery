import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  photos: [],
  isLoading: false,
};

export const getPhotos = createAsyncThunk("photos/getPhotos", async () => {
  const response = await fetch("https://picsum.photos/v2/list?page=2&limit=9");
  const result = await response.json();
  return result;
});

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
  extraReducers: {
    [getPhotos.pending]: (state) => {
      state.isLoading = true;
    },
    [getPhotos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.photos = action.payload;
    },
    [getPhotos.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default gallerySlice.reducer;
