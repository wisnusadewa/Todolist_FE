import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModal: false,
  isLoading: false,
  visibleCount: 8,
};

const useProjectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    incrementVisibleCount: (state) => {
      state.visibleCount += 8; // Tambahkan 8 data setiap kali dipanggil
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setisModal: (state, action) => {
      state.isModal = action.payload;
    },
  },
});

export const { setIsLoading, setisModal, incrementVisibleCount } = useProjectSlice.actions;

export default useProjectSlice.reducer;
