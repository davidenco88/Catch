import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  trip: {
    id: undefined,
    cargoOwner: undefined,
    cargoDescription: undefined,
    typeService: undefined,
    cargoType: undefined,
    cargoImage1: undefined,
    cargoImage2: undefined,
    typeVehicle: undefined,
    declaredAmount: undefined,
    weight: undefined,
    serviceObservations: undefined,
    originDateTime: undefined,
    dispacherName: undefined,
    dispacherId: undefined,
    dispacherPhone: undefined,
    dispacherEmail: undefined,
    originState: undefined,
    originCity: undefined,
    originAdress: undefined,
    loadHours: undefined,
    loadCrew: undefined,
    unloadHours: undefined,
    unloadCrew: undefined,
    destinationDateTime: undefined,
    recipientName: undefined,
    recipientId: undefined,
    recipientPhone: undefined,
    recipientEmail: undefined,
    destinationState: undefined,
    destinationCity: undefined,
    destinationAdress: undefined,
    amountOffered: undefined,
    tripState: undefined
  },
  activeStep: 0
};

const tripsReduxSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    updateTrip: (state, action) => {
      state.trip = {
        ...state.trip,
        ...action.payload
      };
    },
    resetTrip: (state) => {
      // eslint-disable-next-line no-unused-vars
      state = {
        ...initialState
      };
    },
    incrementStep: (state) => {
      state.activeStep += 1;
    },
    decrementStep: (state) => {
      state.activeStep -= 1;
    },
    resetStep: (state) => {
      state.activeStep = 0;
    }
  }
});

export const { updateTrip, resetTrip, incrementStep, decrementStep, resetStep } =
  tripsReduxSlice.actions;

export default tripsReduxSlice.reducer;
