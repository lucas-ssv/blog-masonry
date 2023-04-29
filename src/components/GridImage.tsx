import { Masonry } from '@mui/lab'
import { ImageDTO } from '@/dtos/ImageDTO'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'

type Props = {
  photos: Array<ImageDTO>
}

export function GridImage ({ photos }: Props) {
  return (
    <Masonry columns={{ xs: 2, md: 3, lg: 4 }} sx={{ mt: 12 }}>
      {photos.map((photo, index) => (
        <Card key={index}>
          <CardMedia
            component='img'
            src={`${photo.urls.regular}?auto=format`}
            srcSet={`${photo.urls.regular}?auto=format&dpr=2 2x`}
            alt={photo.alt_description}
            loading='lazy'
            style={{
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              display: 'block',
              width: '100%'
            }}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {photo.alt_description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </Masonry>
  )
}
