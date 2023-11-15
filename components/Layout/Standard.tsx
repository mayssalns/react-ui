import { MediaAttributes } from '@/types/strapi'
import { HTMLAttributes, ReactNode } from 'react'
import { StripiMedia } from '../Shared/StripiMedia'
import { EmbedHTML } from '@/components/EmbedHTML'

interface StandardProps extends HTMLAttributes<HTMLElement> {
  caption?: string
  content?: string
  media: MediaAttributes
  reverse?: boolean
  components?: {
    title?: ReactNode
  }
}

export const Standard = ({
  caption,
  content,
  media,
  components,
  reverse,
  ...rest
}: StandardProps) => {
  return (
    <div {...rest}>
      {reverse && media.data && (
        <a className="" href={media.data[0].attributes.url}>
          <source srcSet={media.data?.[0]?.attributes.url} />
          <StripiMedia media={media.data?.[0].attributes} alt="" className="" />
        </a>
      )}
      <div className="flex flex-col gap-4 text-left">
        {components?.title}
        {caption && (
          <EmbedHTML className="text-2xl md:text-4xl " html={caption} />
        )}
        <EmbedHTML className="" html={content} />
      </div>
      {!reverse && media.data && (
        <div className="">
          <StripiMedia
            media={media?.data?.[0]?.attributes}
            alt=""
            className=""
          />
        </div>
      )}
    </div>
  )
}
