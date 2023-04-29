import { ImageDTO } from '@/dtos/ImageDTO'
import { atom } from 'recoil'

export const photosList = atom({
  key: 'photosList',
  default: [] as ImageDTO[]
})
