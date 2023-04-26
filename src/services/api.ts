import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.unsplash.com/photos',
  headers: {
    Authorization: 'Client-ID 7mTqlP4YwYQjXd8WLKYD79F02FvRmzNnpQds4Bkkgs8'
  }
})
