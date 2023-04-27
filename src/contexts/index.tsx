import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '@/services/api'
import { ImageDTO } from '@/dtos/ImageDTO'

type ContextProviderProps = {
  children: ReactNode
}

type ContextProps = {
  photos: Array<ImageDTO>
}

export const Context = createContext<ContextProps>({} as ContextProps)

export function ContextProvider ({ children }: ContextProviderProps) {
  const [photosContext, setPhotosContext] = useState<ImageDTO[]>([])

  const fetchPhotos = async () => {
    const photos = await api.get(
      '?per_page=10&page=1&query=desk&orientation=landscape'
    )
    setPhotosContext(photos.data)
  }

  useEffect(() => {
    fetchPhotos()
  }, [])

  return (
    <Context.Provider value={{ photos: photosContext }}>
      {children}
    </Context.Provider>
  )
}
