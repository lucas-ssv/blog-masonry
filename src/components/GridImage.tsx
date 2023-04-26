import { Masonry } from '@mui/lab'
import { ImageDTO } from '@/dtos/ImageDTO'

type Props = {
  photos: Array<ImageDTO>
}

export function GridImage ({ photos }: Props) {
  return (
    <Masonry columns={{ xs: 2, md: 3, lg: 4 }} sx={{ mt: 12 }}>
      {photos.map((photo, index) => (
        <div key={index}>
          <img
            src={`${photo.urls.regular}?auto=format`}
            srcSet={`${photo.urls.regular}?auto=format&dpr=2 2x`}
            alt={photo.description}
            loading='lazy'
            style={{
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              display: 'block',
              width: '100%'
            }}
          />
        </div>
      ))}
    </Masonry>
  )
}
