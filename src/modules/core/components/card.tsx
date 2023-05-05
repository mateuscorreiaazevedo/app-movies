import { Image, Pressable } from 'react-native'

interface Props {
  data: {
    id: number
    poster_path: string
  }
  onPress?: () => void
  loading?: boolean
}

export const Card = ({ data, ...rest }: Props) => {
  return (
    <Pressable {...rest} className="w-image-card h-40 rounded-2xl mx-2 mb-4 bg-gray-700">
      <Image
        className="w-image-card h-40 rounded-2xl"
        source={{
          uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`
        }}
      />
    </Pressable>
  )
}
