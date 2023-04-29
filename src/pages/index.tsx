import { useEffect } from 'react'
import { Container } from '@mui/material'
import { useRecoilState } from 'recoil'
import { api } from '@/services/api'
import { Header } from '@/components/Header'
import { GridImage } from '@/components/GridImage'
import { photosList } from '@/atoms'

export default function Home () {
  const [photos, setPhotos] = useRecoilState(photosList)

  const fetchPhotos = async () => {
    const photos = await api.get(
      '?per_page=10&page=1&query=desk&orientation=landscape'
    )
    setPhotos(photos.data)
  }

  useEffect(() => {
    fetchPhotos()
  }, [])

  return (
    <Container maxWidth='lg'>
      <Header />
      <GridImage photos={photos} />
    </Container>
  )
}
