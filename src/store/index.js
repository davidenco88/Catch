import { configureStore } from '@reduxjs/toolkit';

import tripReducer from '../pages/Trips/tripsReduxSlice';

const store = configureStore({
  reducer: {
    trip: tripReducer
  }
});

export default store;
