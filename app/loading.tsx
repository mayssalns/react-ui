import { LottiePlayer } from '@/components/LottiePayers'

export default function Loading() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <LottiePlayer src="/lottie-files/content_platform.json" />
    </div>
  )
}
