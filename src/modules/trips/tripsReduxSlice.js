import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
};

const tripsReduxSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    updateTrip: (state, action) => {
      state = {
        ...state,
        ...action.payload
      };
    }
  }
});

export const { updateTrip } = tripsReduxSlice.actions;

export default tripsReduxSlice.reducer;
