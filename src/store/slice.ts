import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DataType } from "../types";

interface DataState {
  dataSource: DataType[];
  isModalOpen: boolean;
}

const initialState: DataState = {
  dataSource: [
    { key: "1", name: "Aleksei Vavulo", age: 36, address: "Russia" },
  ],
  isModalOpen: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addRecord: (state, action: PayloadAction<DataType>) => {
      state.dataSource.push(action.payload);
    },
    deleteRecord: (state, action: PayloadAction<string>) => {
      state.dataSource = state.dataSource.filter(
        (item) => item.key !== action.payload
      );
    },
    toggleModal: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const { addRecord, deleteRecord, toggleModal } = dataSlice.actions;
export default dataSlice.reducer;
