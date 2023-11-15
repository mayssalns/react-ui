'use client'
import { IPlayerProps, Player } from '@lottiefiles/react-lottie-player'

export const LottiePlayer = ({
  src = '/lottie-files/content_platform.json',
  ...rest
}: IPlayerProps) => {
  return (
    <Player
      autoplay
      loop
      src={src}
      style={{ height: '300px', width: '300px' }}
      {...rest}
    />
  )
}
