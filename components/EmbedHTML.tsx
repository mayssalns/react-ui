import { HTMLAttributes } from 'react'

export const EmbedHTML = ({
  children,
  html,
  ...rest
}: HTMLAttributes<HTMLElement> & { html?: string | null }) => {
  const sanitizedData = () => ({
    __html: (html || '').replace(/[\\"]/g, ''),
  })

  return <div {...rest} dangerouslySetInnerHTML={sanitizedData()} />
}
