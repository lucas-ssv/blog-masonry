import { useEffect } from 'react'
import { CircularProgress, Container } from '@mui/material'
import { Header } from '@/components/Header'
import { GridImage } from '@/components/GridImage'
import { fetchPhotos } from '@/store/fetchPhotos'
import { useAppDispatch, useAppSelector } from '@/store'

export default function Home () {
  const state = useAppSelector(state => state)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPhotos())
  }, [])

  return (
    <Container maxWidth='lg'>
      <Header />
      {state.loading ? (
        <CircularProgress sx={{ mt: 50 }} />
      ) : (
        <GridImage photos={state.data} />
      )}
    </Container>
  )
}
