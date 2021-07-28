import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../Features/movie/movieSlice'

export const store = configureStore({
    reducer: {
      movie: movieReducer
    },
  });
  