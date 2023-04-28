import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '@/services/api'

export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async () => {
  try {
    const response = await api.get('?per_page=10&page=1&query=desk&orientation=landscape')
    return response.data
  } catch (error) {
    throw error
  }
})
