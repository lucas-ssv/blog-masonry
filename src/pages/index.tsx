import { useContext } from 'react'
import { Container } from '@mui/material'
import { Header } from '@/components/Header'
import { GridImage } from '@/components/GridImage'
import { Context } from '@/contexts'

export default function Home () {
  const { photos } = useContext(Context)

  return (
    <Container maxWidth='lg'>
      <Header />
      <GridImage photos={photos} />
    </Container>
  )
}
