import { configureStore } from '@reduxjs/toolkit';

import tripReducer from '../modules/trips/tripsReduxSlice';

const store = configureStore({
  reducer: {
    trip: tripReducer
  }
});

export default store;
