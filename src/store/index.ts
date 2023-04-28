import { createSlice, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { fetchPhotos } from './fetchPhotos'
import { ImageDTO } from '@/dtos/ImageDTO'

export const photosSlice = createSlice({
  name: 'photosSlice',
  initialState: {
    data: [] as ImageDTO[],
    loading: false
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPhotos.pending, state => {
      state.loading = true
    })
    .addCase(fetchPhotos.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
    })
    .addCase(fetchPhotos.rejected, state => {
      state.loading = false
    })
  }
})

export const store = configureStore({
  reducer: photosSlice.reducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
